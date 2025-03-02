import React from 'react';
import arrayDestruct from '../components/image/arrayDestruct.jpg'; 
import reactParallax from '../components/image/reactParallax.jpg'; 
import navbar from '../components/image/navbar.jpg'; 
import reactSmooth from '../components/image/reactSmooth.jpg'; 
import installNode from '../components/image/installNode.jpg'; 
import reactWeather from '../components/image/reactWeather.jpg';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: arrayDestruct
        },
        {
            id: 2,
            src: reactParallax
        },
        {
            id: 3,
            src: navbar
        },
        {
            id: 4,
            src: reactSmooth
        },
        {
            id: 5,
            src: installNode
        },
        {
            id: 6,
            src: reactWeather
        }

    ];

  return (
    <div name='portfolio'
        className='bg-gradient-to-b from-black tp-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here </p>
            </div>



            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                
               {
               portfolios.map(({id, src}) =>(

                
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={ src }
                        className="rounded-md duration-200 hover:scale-105"
                    />
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >Demo</button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >Code</button>
                    </div>
                </div>

                ))}
            </div>
        </div>
    </div>
  
  );
};

export default Portfolio