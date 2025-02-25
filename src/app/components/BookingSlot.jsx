import React from 'react';

const BookingSlot = () => {
  return (
    <div className='bg-lightblue w-[200] h-auto border-l border-l-darkblue border-l-[10px] rounded-10 p-2 flex justify-between text-darkblue'>
    {/* Dynamisk efter valgte bookingtype og informationerne deraf
    Farve ændring baseret på stadie/status */}
      {/* <template> */}
        <h1 className='font-bold'>Titel</h1>
        {/* <p>Beskrivelse</p> */}
        <img src="/img/mop.svg" alt="ikon" className='w-35 h-35'/>
      {/* </template> */}
    </div>
  );
};

export default BookingSlot;