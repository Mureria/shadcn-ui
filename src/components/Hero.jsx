import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const Hero = (props) => {
  return (
    <div className='mt-20 md:mt-40 h-full text-center flex gap-2 flex-col max-w-[980px] mx-auto my-6 md:my-24'>
     <p className='flex items-center gap-2 max-w-[300px] mx-auto text-sm font-semibold bg-bg px-3 py-1 rounded-md'>{props.subhead} <FaArrowRight size={12} /></p>
     <h1 className='text-3xl md:text-6xl max-w-[300px] md:max-w-[950px] mx-auto font-bold font-sans tracking-tighter mb-3'>{props.title} </h1>
     <h2 className='text-lg sm:text-xl max-w-[330px] md:max-w-[750px] mx-auto text-gray'>{props.paragraph}</h2>
     <div className='flex justify-center gap-4 py-3 md:pb-10 md:py-4'>
     <button className='text-sm bg-white text-black  md:py-2 px-2 md:px-4 rounded-md'>{props.message}</button>
     <button className='text-sm font-semibold border border-gray px-4 py-2 rounded-md'>{props.mess}</button>
     </div>
    </div>
  )
}

export default Hero