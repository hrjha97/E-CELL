import axios from 'axios'
import { serverUrl } from './server';

type IQnA = {
    prompt: string;
    studentId: string | null;
    websearch: boolean;
}
export const QnARetrival = async (payload: IQnA) => {
    // Extract student information from localStorage
    const studentInfo = `
      My name is ${localStorage.getItem('name')}
      I'm in class ${localStorage.getItem('std')}th
      My stream is ${localStorage.getItem('stream')}
      I have Interest in ${localStorage.getItem('interest')}
      and I'm skilled in ${localStorage.getItem('skills')}
    `;

    const fullPrompt = `Hello, ${studentInfo}\n and my {question} is: ${payload.prompt}`;
    console.log(fullPrompt)
    const url = serverUrl({ Production: true });
    const response = await axios.post(url + '/qna', {
      ...payload,
      prompt: fullPrompt,
    });
  
    return response.data;
  };