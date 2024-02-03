// App.tsx

import React from 'react';
import Chatbot from './Chatbot';

const page: React.FC = () => {
  return (
    <div className="ml-48 border flex items-center">
      <div>
        <Chatbot />
      </div>
    </div>
  );
};

export default page;
