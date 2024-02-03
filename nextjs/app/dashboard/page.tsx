// App.tsx

import React from 'react';
import Chatbot from './Chatbot';

const page: React.FC = () => {
  return (
    <div className="ml-10 border h-screen flex items-center">
      <div>
        <Chatbot />
      </div>
    </div>
  );
};

export default page;
