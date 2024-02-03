import React from "react";
const app = () => {
  return (
    <>
     <p className = "text-5xl">Mira AI</p>
      <header className="w-full h-auto ">
        <div className="absolute inset-y-0 flex flex-col left-px text-centerr">
          <p className="  font-bold text-gray-800 font-serif text-2xl md:text-3xl p-3 mt-[120px] ml-[30px] rounded-lg ">
            We will help you in finding you right career path.
          </p>
          <div className="w-[450px] flex flex-col pl-10 mt-[30px]">
            <p className="tracking-wide font-serif text-[20px]">
              Discover tailored career advice at your fingertips. Our chatbot
              transforms the maze of career choices into a clear path for your
              success. Whether you're delving into AI and ML or exploring other
              possibilities, this is your destination for insightful and
              actionable career counseling. Uncover the guidance you need to
              stride confidently towards a fulfilling and rewarding professional
              journey. Your future begins here!
            </p>
          </div>
        </div>
        <img
          className="w-auto h-auto border-none ml-[550px]  hidden md:block  "
          src="https://dreamcaatcheer.com/wp-content/uploads/2023/04/career-counselling.jpg"
        />
        <img
          className="md:hidden w-full"
          src="https://www.globalcareercounsellor.com/blog/wp-content/uploads/2020/01/what-is-career-counselling.png"
        />
      </header>
    </>
  );
};

export default app;
