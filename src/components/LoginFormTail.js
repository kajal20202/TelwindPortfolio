import React from 'react';

function LoginFormTail() {
  return (
    <div className='w-full h-screen flex items-start relative'>
         <div className='relative w-1/2 text-justify h-56 flex flex-col'>
        
      <div className='absolute top-0 left-0 w-full h-full'>
        <img
          className='w-full h-full object-cover'
          src='https://images.pexels.com/photos/927629/pexels-photo-927629.jpeg'
          alt='Background Image'
        />
      </div>
      <div className='absolute top-1/4 left-10%'>
        <h1 className='text-2xl text-white font-bold my-4'>Metamind System Pvt.Ltd</h1>
      </div>
    </div>
    </div>
  );
}

export default LoginFormTail;

