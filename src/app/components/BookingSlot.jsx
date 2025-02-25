import React from 'react';

const BookingSlot = () => {
  return (
    <div>
    {/* Dynamisk efter valgte bookingtype og informationerne deraf
    Farve ændring baseret på stadie/status */}
      <template>
        <h1 className='font-bold'>Titel</h1>
        <p>Beskrivelse</p>
        <img src="/img/" alt="ikon" className='w-20 h-20'/>
      </template>
    </div>
  );
};

export default BookingSlot;