"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
  };

  return (
    <div className="backdrop-blur-lg flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col flex-start text-darkblue p-5 h-auto w-[300px] rounded-15 bg-white border border-1'>
        <label>Username</label>
        <input {...register("username", { required: true, minLength: 1, maxLength: 4, pattern: /^[A-Za-z]+$/i})}maxLength={4} className='border border-1 p-2 mb-2 mt-2 rounded-10' type="text" placeholder='Initials' />
        {errors.username && <span className='text-red mb-5'>Please enter 1-4 characters</span>}
        <label>Password</label>
        <input {...register("password", { required: true, minLength: 6 })} className='border border-1 p-2 mb-2 mt-2 rounded-10' type="password" placeholder='*****' />
        {errors.password && <span className='text-red mb-5'>Please enter at least 6 characters</span>}
        <button type="submit" className='bg-darkblue text-white pl-10 pr-10 mb-2 rounded-10 h-[40px]'>Sign in</button>
        <button type="reset" className='underline text-left'>Forgot password?</button>
      </form>
    </div>
  );
};

export default Login;