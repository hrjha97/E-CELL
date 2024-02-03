import axios from 'axios'
import { serverUrl } from './server';

type IstudentInfo = {
    name: string;
    std: number;
    stream?: string;
    interest: string[];
    skills?: string[];
    resume?: string;
    qna?  : any,
}
export const studentInfo=async(payload: IstudentInfo) =>{
    const token = localStorage.getItem('token');
    const url = serverUrl({Production : true})
    const response = await axios.post(url+'/studentdetail' ,payload,{
        headers: {
            Authorization: `Bearer ${token}`,
          },
    }) 
    return response.data;
}

export const getstudentInfo=async()=>{
    const token = localStorage.getItem('token');
    if(token){
        const url = serverUrl({Production : true})
        const response = await axios.get(url+'/studentdetail' ,{
            headers: {
                "Authorization": `Bearer ${token.replace(/["']/g, '')}`,
              },
        }) 
        return response.data;
    }
}