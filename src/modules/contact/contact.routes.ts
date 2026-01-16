import express from "express";
import { ContactController } from "./contact.controller";

const contactRoute = express.Router();
contactRoute.get("/", ContactController.getAllContacts);

contactRoute.post("/", ContactController.createContact);

export default contactRoute;
