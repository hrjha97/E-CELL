import express, { Request, Response } from "express";
import dotenv from "dotenv";
import register from "./api/v1/controllers/register";
import studentDetails from "./api/v1/controllers/studentDetails";
import qnaAdvise from "./api/v1/controllers/qnaAdvise";

dotenv.config();

import "./api/v1/models/mongodb";
import bodyParser from "body-parser";
import { QnARetrival } from "./api/v1/services/langchain";

const app = express();

const PORT = 8001;

// adding body parser
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json("Hello World !");
});

// app.post("/qna", async (req: Request, res: Response) => {
//   console.log("QNA API called");
//   const { prompt } = req.body;
//   if (!prompt) {
//     return res.send({ error: "Missing prompt field" });
//   }
//   const response = await QnARetrival(prompt);
//   console.log(response);
//   return res.send(response);
// });
app.use("/", register);
app.use("/", studentDetails);
app.use("/",qnaAdvise)

app.listen(PORT, () => {
  console.log(`Connected to PORT ${PORT}`);
});
