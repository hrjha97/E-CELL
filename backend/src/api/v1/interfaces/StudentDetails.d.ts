import {Document} from 'mongoose'

interface IStudent extends Document{
    name: string;
    std: number;
    stream?: string;
    interest: string[];
    skills?: string[];
    resume?: string;
}

export default IStudent;