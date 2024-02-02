import {Router} from 'express'
import SignUp from '../routers/SignUp'
import SignIn from '../routers/SignIn'

const app = Router()
app.use('/signup', SignUp)
app.use('/signin', SignIn)

export default app;