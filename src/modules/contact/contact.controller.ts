import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ContactService } from "./contact.service";

const getAllContacts = catchAsync(async (req, res) => {
  const result = await ContactService.getAllContacts();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Retrieved contacts successfully",
    data: result,
  });
});

const createContact = catchAsync(async (req, res) => {
  // console.log(req.body);
  const result = await ContactService.createContact(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Contact created successfully",
    data: result,
  });
});

export const ContactController = {
  getAllContacts,
  createContact,
};
