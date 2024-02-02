import mongoose from 'mongoose'
import { Isignup } from '../interfaces/Signup';

const SignupSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,'Please provide your Email'],
        unique: true
    },
    username:{
        type: String,
        require: true,
        maxLength: 20,
        minLength: 5,
    },
    password:{
        type: String,
        require: true,
    }
})

const Signup = mongoose.model<Isignup>("Signup",SignupSchema);

export default Signup;