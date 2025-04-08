import React from 'react'

const Hero = ({ title, desc }) => {
  return (
    <div className='relative py-[110px] text-center'>
        <img className='absolute top-0 w-full h-full object-cover' src="./hero-bg.png" alt="hero banner" />
        <h1 className='px-4 font-[700] text-3xl lg:text-[50px]'>{ title }</h1>
        <p className='px-4 text-base mt-4'>{ desc }</p>
    </div>
  )
}

export default Hero