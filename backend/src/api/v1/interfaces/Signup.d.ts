import {Document} from 'mongoose'

export interface Isignup extends Document{
    email: string;
    username: string;
    password:string;
}