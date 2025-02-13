"use client"
import React from 'react';
const Booking = () => {
  return (
    <div className='text-darkblue flex flex-col gap-5 w-[400px] p-5 border'>
<h1 className='font-bold'>New Booking</h1>

{/* indsæt dato og rum vælger */}

<form action="" className='flex flex-col'>
    <label>
        <input type="checkbox" name="Extra cleaning KS"className='mr-2'/>Extra cleaning KS
    </label>
    <label>
        <input type="checkbox" name="Extra cleaning HR"className='mr-2'/>Extra cleaning HR
    </label>
    <label>
        <input type="checkbox" name="No acces"className='mr-2'/>No access
    </label>

    <label id='comment' className='mt-5'>Comment
</label>
<textarea name="comment" id="comment" className='border'></textarea>

<button type='submit' className='bg-darkblue text-white w-200 rounded-10 p-1 mt-5'>Submit Request</button>

</form>
    </div>
  )};

export default Booking;

