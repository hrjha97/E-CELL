// App.tsx

import React from 'react';
import Chatbot from './Chatbot';
import Navbar from '../navbar';
import Box from './Box';
import { Switch } from '@/components/ui/switch';

const Page: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      <div className = "mt-7 w-[800px] ml-2 flex flex-1  md:-mt-[680px]">
      <Box />

      </div>

      <div className="flex-1 flex ml-28 md:ml-[500px] w-2/4  -mt-[320px] md:-mt-[745px]">
       
       
        <div className="flex-1 block">
         
          <Chatbot />
          
          
        </div>
      </div>
    </div>
  );
};

export default Page;
