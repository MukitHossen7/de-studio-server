import config from "../../config";
import { prisma } from "../../lib/prisma";
import { sendMail } from "../../utils/sendEmail";
import { Contact } from "./contact.interface";

const getAllContacts = async () => {
  const data = await prisma.contact.findMany();
  return data;
};

const createContact = async (payload: Contact) => {
  const contactData = await prisma.contact.create({
    data: payload,
  });

  try {
    await sendMail({
      to: config.SMTP.SMTP_TO,
      subject: "New Contact Message Received",
      templateName: "contactNotification",
      templateData: {
        name: contactData.name,
        email: contactData.email,
        companyName: contactData.companyName,
        phone: contactData.phone,
        service: contactData.service,
        amount: contactData.amount,
        message: contactData.message,
      },
    });
  } catch (error) {
    console.error("Email failed to send, but contact was created:", error);
  }

  return contactData;
};

export const ContactService = {
  getAllContacts,
  createContact,
};
