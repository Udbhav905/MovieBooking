import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import ReactPlayer from 'react-player'
import BlurCircleofMovies from './BlurCircleofMovies';
import { PlayCircleIcon } from 'lucide-react';

const TrailerSection = () => {
    const [currentTrailer,setcurrentTrailer]=useState(dummyTrailers[0]);
  return (

    <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
        <p className='text-gray-300 font-medium text-lg max-w-[960px]'>Trailer</p>
        <div className='relative mt-6'>
            <BlurCircleofMovies top='-100px' right='-100px'/>
            <ReactPlayer className='mx-auto max-w-full'  url={currentTrailer.videoUrl} controls={false}/>
        </div>
        <div className='group  grid grid-cols-4 gap-4 md:gap-8 mt-7 max-w-3xl mx-auto' >
            {dummyTrailers.map((trailer)=>(
            <div key={trailer.image} onClick={()=>{setcurrentTrailer(trailer)}} className='relative group-hover:not-hover:opacity-50 hover:-translate-y-1 duration-300 transition max-md:h-50 md:max-h-60 cursor-pointer'>
                <img src={trailer.image} alt="images" className='rounded-lg w-full h-full object-cover brightness-75' />
                <PlayCircleIcon strokeWidth={1.6} className='absolute top-1/2 left-1/2 w-5 md:w-8 h-5 md:h-12 transform -translate-x-1/2 -translate-y-1/2'/>
            </div>
            ))}
     
        </div>

    </div>
  )
}

export default TrailerSection