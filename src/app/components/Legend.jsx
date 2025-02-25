import React from 'react';

const Legend = () => {
  return (
    <div>
      <ul className='p-5 border rounded-10 w-[330px] flex flex-col place-self-end text-darkblue border-darkblue'>
        <li className='flex gap-2'><h1 className='font-bold'>Daily Cleaning:</h1><p>white</p><img src="/img/broom.svg" alt="broom" className='h-30 w-auto bg-none'/></li>
        <li className='flex gap-2'><h1 className='font-bold'>KS/HR:</h1><p>blue</p><img src="/img/mop.svg" alt="mop" className='h-30 w-auto bg-none'/></li>
        <li className='flex gap-2'><h1 className='font-bold'>No Access:</h1><p>red</p><img src="/img/warning.svg" alt="warning" className='h-30 w-auto bg-none'/></li>
        <li className='flex gap-2'><h1 className='font-bold'>Production/Development:</h1><p>yellow</p><img src="/img/lab.svg" alt="lab" className='h-30 w-auto bg-none'/></li>
      </ul>
    </div>
  );
};

export default Legend;