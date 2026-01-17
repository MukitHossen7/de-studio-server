import cors from "cors";
import express, { type Request, type Response } from "express";
import cookieParser from "cookie-parser";
import routes from "./routes/routes";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["https://go-pal.vercel.app", "http://localhost:3000"],
    credentials: true,
  }),
);

// routes
app.use("/api/v1", routes);

app.get("/", (req: Request, res: Response) => {
  res.send({
    success: true,
    message: "De-Studio Backend is running...",
  });
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
