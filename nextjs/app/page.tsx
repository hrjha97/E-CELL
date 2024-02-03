import React from "react";
const app = () => {
  return (
    <>
      {/* navbar goes from here */}
      <nav
        className="w-full h-20 bg-gray-100 flex justify-between border-none
     px-5 md:px-5 items-center "
      >
        <div className="text-3xl text-gray-800 font-bold font-serif leading-8 flex flex-row border-0">
          Mira Bot
          <img
            className="h-[30px] w-[30px] ml-2 border-none shadow "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4CTjAI8OdRCg72oAwI97qPoNHyKeYdE98xK6z6EwEJQATw5qQ2aNTAcuNZOPg3idkwS4&usqp=CAU"
          />
        </div>
        <ul className="md:flex font-semibold hidden font-sans ">
          <li className="mx-[10px] text-gray-800 cursor-pointer">Home</li>
          <li className="mx-[10px] text-gray-800 cursor-pointer">About</li>
          <li className="mx-[10px] text-gray-800 cursor-pointer">Contact Us</li>
        </ul>
        <div
          className="hidden md:block px-2 py-2 bg-indigo-600 text-white rounded
   font-bold cursor-pointer"
        >
          <button>Login/Signup</button>
        </div>
        <div className="md:hidden">
          <a className="text-4xl" href="#">
            ≡
          </a>
        </div>
      </nav>
      {/* nav bar ends here */}
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
