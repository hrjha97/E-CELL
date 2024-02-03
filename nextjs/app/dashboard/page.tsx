"use client"

import React, { useEffect, useState } from 'react';
import { getstudentInfo } from '../api/studentInfo';
import Chatbot from './Chatbot';
import Link from 'next/link';
import Logo from '@/components/Logo';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import Prompt from '../Prompt';

const page: React.FC = () => {
  const [Qna, setQna] = useState([])
  const [studentData, setStudentData] = useState([]);
  const [token, settoken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const tokens: string | null = localStorage.getItem("token");
      settoken(tokens);
    } else {
      alert("please login!")
    }
  }, []);
  

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const data = await getstudentInfo();
        setStudentData(data);
      } catch (error) {
        console.error('Error fetching student info:', error);
      }
    };

    fetchStudentInfo();
  }, []);

  const handleCreateNewInfo = (index: number) => {
    const clickedStudent:any = studentData[index];
    localStorage.setItem('userId',clickedStudent._id)
    localStorage.setItem('name',clickedStudent.name)
    localStorage.setItem('std',clickedStudent.std)
    localStorage.setItem('stream',clickedStudent.stream)
    localStorage.setItem('interest',clickedStudent.interest)
    localStorage.setItem('skills',clickedStudent.skills)
    setQna(clickedStudent.qna)
  };
  console.log(Qna)

  return (
    <>
    {token?(<>
      <nav className="w-full h-20 bg-gray-950 flex justify-between border-none
     px-5 md:px-5 items-center ">
      <Logo />
      <ThemeSwitcher />
     </nav>
    <div className="h-screen w-[400px] border border-gray-300">
      <div className="flex justify-center">
        <Link href='createinfo' className="bg-sky-600 m-3 p-3 rounded-xl">Create New Info</Link>
      </div>
      
      {/* Map through studentData and render details */}
      <div>
        {studentData.map((student: any, index) => (
          <div key={index} onClick={() => handleCreateNewInfo(index)} className="border p-2 m-2">
            <h3 className='hover:text-sky-400 cursor-pointer'>{student.name}</h3>
          </div>
        ))}
      </div>
    </div>
    <div className="flex-1 flex ml-28 md:ml-[500px] w-2/4  -mt-[320px] md:-mt-[700px]">
    <div className="flex-1 block">
      <Chatbot qnaData={Qna} />
    </div>
  </div>
  </>):(
    <Prompt/>
  )}
    </>
  );
};

export default page;
