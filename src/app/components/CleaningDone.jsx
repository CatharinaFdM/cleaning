"use client"
import React from 'react';
import RoomDropdown from '../components/RoomDropdown';

const CleaningDone = () => {
  return (
    <div className='text-darkblue flex flex-col gap-5 w-[400px] p-5 border rounded-10'>
<h1 className='font-bold'>Cleaning done</h1>
<div className='flex gap-2'>
<RoomDropdown/>
</div>
<form action="" className='flex flex-col'>
<label>
        <input type="checkbox" name="Routine cleaning"className='mr-2'/>Routine cleaning
    </label>
    <label>
        <input type="checkbox" name="Production/Development"className='mr-2'/>Production/Development
    </label>
    <label>
        <input type="checkbox" name="KS"className='mr-2'/>KS
    </label>
    <label>
        <input type="checkbox" name="Extra cleaning HR"className='mr-2'/>HR
    </label>
    <label>
        <input type="checkbox" name="No acces"className='mr-2'/>No access
    </label>

    <label id='comment' className='mt-5'>Comment
</label>
<textarea name="comment" id="comment" className='border'></textarea>

<button type='submit' className='bg-darkblue text-white w-200 rounded-10 p-1 mt-5'>Submit Response</button>

</form>
    </div>
  );
};

export default CleaningDone;