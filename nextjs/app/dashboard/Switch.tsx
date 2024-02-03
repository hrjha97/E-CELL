import React, { useState } from 'react';

interface SwitchProps {
  setWebSearch: (value: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ setWebSearch }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setWebSearch(!isChecked);
  };

  return (
    <>
      <label className='flex cursor-pointer select-none'>
        <div className='relative'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div className={`block h-8 w-14 rounded-full ${isChecked ? 'bg-blue-500' : 'bg-[#E5E7EB]'} `}></div>
          <div
            className={`dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition transform ${
              isChecked ? 'translate-x-6' : 'translate-x-0'
            }`}
          ></div>
        </div>

        <span className={`ml-2 font-bold text-sm ${isChecked ? 'text-rose-500' : 'text-gray-500'}`}>
          {isChecked ? 'Web Search On' : 'Web Search Off'}
        </span>
      </label>
    </>
  );
};

export { Switch };