import mongoose from 'mongoose'
import Isignin from '../interfaces/Signin';

const signInSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required: true
    }
})

const Signin = mongoose.model<Isignin>('Signin',signInSchema);
export default Signin;