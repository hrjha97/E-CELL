import mongoose from "mongoose";
import IStudent from "../interfaces/StudentDetails";

const studentDetails = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Signup", required: true},
  name: { type: String, required: true },
  std: { type: Number, required: true },
  stream: { type: String },
  interest: { type: [String], required: true },
  skills: { type: [String] },
  resume: { type: String }
},{
  timestamps: true
});

const Student = mongoose.model<IStudent>("Student", studentDetails);

export default Student;
