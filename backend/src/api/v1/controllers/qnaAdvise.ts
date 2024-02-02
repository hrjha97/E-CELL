import {Router} from 'express'
import QnaAdvise from '../routers/QnaAdvise'


const app = Router()
app.use('/qna', QnaAdvise)

export default app;