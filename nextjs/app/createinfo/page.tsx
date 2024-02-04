"use client";

import React, { useEffect, useState } from "react";
import { signin } from "../api/register";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import { studentInfo } from "../api/studentInfo";
import Prompt from "../Prompt";

const Page = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [token, settoken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const tokens: string | null = localStorage.getItem("token");
      settoken(tokens);
    } else {
      alert("please login!")
    }
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    std: 10,
    Stream: '',
    interest: [],
    skills: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget; // Use currentTarget for textareas

    if (name === 'interest' || name === 'skills') {
      // If the input is interest or skills, update the state as an array
      setFormData({
        ...formData,
        [name]: value.split('\n').map((item) => item.trim()),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleTextareaEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // If the Enter key is pressed and the event is not a combination with Shift, prevent the default behavior and push the value into the array
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleChange(e as React.ChangeEvent<any>);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await studentInfo(formData)
      alert('Your information has been submitted successfully!');
      console.log(response);

      // Log the form data
      console.log('Form Data:', formData);

      // Redirect to the dashboard Page
      router.push('/dashboard');
    } catch (error) {
      alert(error);
    }

    setIsLoading(false);
  };
  return (
    <>
      {token?(
        <>
        <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2 mb-2"
              src="https://cdn-icons-png.flaticon.com/512/6134/6134346.png"
              alt="logo"
            />
            Mira AI
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create a new Info
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="Name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John Doe"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="class"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Class
                  </label>
                  <input
                    type="number"
                    name="std"
                    id="class"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John Doe"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="Stream"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Stream
                  </label>
                  <input
                    type="text"
                    name="Stream"
                    id="Stream"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John Doe"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="interest"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Interest
                  </label>
                  <textarea
                    name="interest"
                    id="interest"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Separate items with Enter"
                    required
                    onChange={handleChange}
                    onKeyDown={handleTextareaEnter}
                  />
                </div>
                <div>
                  <label
                    htmlFor="skills"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Skills
                  </label>
                  <textarea
                    name="skills"
                    id="skills"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Separate items with Enter"
                    required
                    onChange={handleChange}
                    onKeyDown={handleTextareaEnter}
                  />
                </div>
                {isLoading ? (
                  <button
                    type="submit"
                    className="flex justify-center w-full bg-sky-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <Loading />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full bg-sky-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Submit
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
        </>
      ):(<Prompt/>)}
    </>
  );
};

export default Page;
