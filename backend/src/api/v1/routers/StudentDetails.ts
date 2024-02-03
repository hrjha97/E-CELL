import {Router, Request, Response} from 'express';
import Student from '../schema/StudentDetails';
import { jwtAuthMiddleware } from '../middlewares/jwtAuthMiddleware';

const router = Router();

router.post('/', jwtAuthMiddleware ,async(req:Request, res:Response)=>{
    const {name ,std , stream, interest, skills, resume, userId }= req.body
    try{
    if (!name || !std || !interest){
        return res.status(400).json({ error: "Details Missing!" });
    }
    // save the data in database here
    const newStudent = new Student({
        userId,
        name,
        std,
        stream,
        interest,
        skills,
        resume,
      });
  
      // Save the new student to the database
      await newStudent.save();
  
      return res.status(201).json({ message: "Student created successfully", data: newStudent });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
})

router.get('/',jwtAuthMiddleware,async(req: Request, res:Response)=>{
  const {userId} = req.body;
  if (!userId) {
    return res.status(400).send({ error: "Missing prompt or userId field" });
  }
   const students =await Student.find({userId});
   if(!students) return res.status(404).json('No Data found');
    else {
      return res.status(200).json(students);
    }
   
})


export default router;