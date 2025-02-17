import React from 'react';

const Legend = () => {
  return (
    <div>
      <ul className='p-5 border rounded-10 w-[260px] flex flex-col place-self-end text-darkblue border-darkblue'>
        <li className='flex gap-2'><h1 className='font-bold'>Daily Cleaning:</h1><p>blue</p><img src="/img/broom.svg" alt="broom" className='h-30 w-auto bg-none'/></li>
        <li className='flex gap-2'><h1 className='font-bold'>Extra Cleaning:</h1><p>green</p><img src="/img/mop.svg" alt="mop" className='h-30 w-auto bg-none'/></li>
        <li className='flex gap-2'><h1 className='font-bold'>No Cleaning:</h1><p>red</p><img src="/img/warning.svg" alt="warning" className='h-30 w-auto bg-none'/></li>
      </ul>
    </div>
  );
};

export default Legend;