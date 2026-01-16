import { Router } from "express";
import contactRoute from "../modules/contact/contact.routes";

const routes = Router();

routes.use("/contact", contactRoute);

export default routes;
