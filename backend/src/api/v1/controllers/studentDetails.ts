import {Router} from 'express'
import StudentDetails from '../routers/StudentDetails'

const app = Router()
app.use('/studentdetail', StudentDetails)

export default app;