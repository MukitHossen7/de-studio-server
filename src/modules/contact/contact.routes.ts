import express from "express";
import { ContactController } from "./contact.controller";
import { zodValidateRequest } from "../../middlewares/zodValidateRequest";
import { ContactZodSchema } from "./contact.zod.validation";

const contactRoute = express.Router();
contactRoute.get("/", ContactController.getAllContacts);

contactRoute.post(
  "/",
  zodValidateRequest(ContactZodSchema),
  ContactController.createContact,
);

export default contactRoute;
