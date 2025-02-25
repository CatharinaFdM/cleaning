import React from 'react';

const Button = ({ label }) => {
    return (
    <div>
      <button className='bg-darkblue text-white p-2 rounded-15 hover:bg-white hover:text-darkblue hover:border-darkblue hover:border'>
      {label}
      </button>
    </div>
  );
};

export default Button;