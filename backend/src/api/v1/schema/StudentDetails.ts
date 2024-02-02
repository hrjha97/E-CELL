import mongoose from "mongoose";
import IStudent from "../interfaces/StudentDetails";

const qnaAdviceSubSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true }
}, {
  timestamps: true
});

const studentDetails = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Signup", required: true },
  name: { type: String, required: true },
  std: { type: Number, required: true },
  stream: { type: String },
  interest: { type: [String], required: true },
  skills: { type: [String] },
  resume: { type: String },
  qna: [qnaAdviceSubSchema] 
}, {
  timestamps: true
});

const Student = mongoose.model<IStudent>("Student", studentDetails);

export default Student;
