import { prisma } from "../../lib/prisma";

const getAllContacts = async () => {
  const data = await prisma.contact.findMany();
  return data;
};

const createContact = async (payload: any) => {
  const data = await prisma.contact.create({
    data: payload,
  });
  return data;
};

export const ContactService = {
  getAllContacts,
  createContact,
};
