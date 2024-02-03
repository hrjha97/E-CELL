// App.tsx

import React from 'react';
import Chatbot from './Chatbot';
import Navbar from '../navbar';

const Page: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar />

      <div className="flex-1 flex ml-28 md:ml-64 w-2/3 border -mt-[320px] md:-mt-[680px] ">
        <div className="flex-1 ">
          <Chatbot />
        </div>
      </div>
    </div>
  );
};

export default Page;
