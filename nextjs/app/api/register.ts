import axios from 'axios'
import { serverUrl } from './server'

type Isignup = {
    email: string;
    username: string;
    password: string;
}

type Isignin = {
    email: string;
    username: string;
    password: string;
}

export const signup= async(payload:Isignup):Promise<any>=>{
    const url = serverUrl({Production : true})
    const response = await axios.post(url+'/signup' ,payload) 
    return response.data
}
export const signin= async(payload:Isignin):Promise<any>=>{
    const url = serverUrl({Production : true})
    const response = await axios.post(url+'/signin' ,payload,{
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }) 
    return response.data
}