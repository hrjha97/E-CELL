import Link from "next/link";
import React from "react";

function Logo() {
  
  return (
    <Link
      href={"/"}
      className=" flex font-bold text-3xl bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text hover:cursor-pointer"
    >
      
      <img
        className="w-8 h-8 mr-2 ml-6 mt-5"
        src="https://cdn-icons-png.flaticon.com/512/6134/6134346.png"
        alt="logo"
      />
      <div className="mt-5 ml-2 ">Mira AI</div>
    </Link>
  );
}

export default Logo;