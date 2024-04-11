import React from 'react'
import html from '../components/image/html.jpg'; 
import css from '../components/image/css.jpg';
import javascript from '../components/image/javascript.jpg'; 
import react from '../components/image/react.jpg'; 
import nextjs from '../components/image/nextjs.jpg'; 
import graphql from '../components/image/graphql.jpg'; 
import github from '../components/image/github.jpg'; 
import tailwind from '../components/image/tailwind.jpg'; 





const Experience = () => {
    const techs =[
    {
        id:1,
        src:html,
        title:'HTML',
        style: 'shadow-orange-500'
    },
   
    {
        id:2,
        src:css,
        title:'CSS',
        style:'shadow-blue-400'
    },
    {
        id:3,
        src:javascript,
        title:'Javascript',
        style:'shadow-yellow-500'
    },
    {
        id:4,
        src:react,
        title:'React',
        style:'shadow-blue-500'
    },
    {
        id:5,
        src:tailwind,
        title:'Tailwind',
        style:'shadow-sky-400'
    },
    // {
    //     id:6,
    //     src:nextjs,
    //     title:'Next Js',
    //     style:'shadow-white'
    // },
    // {
    //     id:7,
    //     src:graphql,
    //     title:'GraphQL',
    //     style:'shadow-pink-400'
    // },
    {
        id:8,
        src:github,
        title:'GitHub',
        style:'shadow-gray-400'
    },
];
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen ;'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Fresher</p>
            <p className='py-6'>These are the technologies I've learned with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

        {techs.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} className='w-20 mx-auto' alt={title} />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}
        </div>
    </div>
</div>
  );
};

export default Experience;



