import { Router, Response, Request } from "express";
import { QnARetrival } from "../services/langchain";
import Student from "../schema/StudentDetails";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { prompt, studentId ,websearch} = req.body;

    if (!prompt || !studentId) {
      return res
        .status(400)
        .send({ error: "Missing prompt or studentId field" });
    }

    // Fetch the student document based on the studentId
    const student = await Student.findOne({ _id: studentId });

    if (!student) {
      return res.status(404).send({ error: "Student not found" });
    }

    // Assuming QnARetrival returns an object with 'text' property
    const response = await QnARetrival(prompt, websearch);

    if (!response?.text) {
      return res.status(404).send({ error: "Can't Find Response!" });
    }

    // Add Q&A data to the student document
    student.qna.push({
      question: prompt,
      answer: response.text,
    });

    // Save the updated student document
    await student.save();
    return res.send(response);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Internal Server Error" });
  }
});

export default router;
