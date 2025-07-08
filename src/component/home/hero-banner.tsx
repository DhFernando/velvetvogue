import React from 'react'

function HeroBanner() {
  return (
    <div className='relative'>
        <img src={'/hero-banner.png'} alt="" className="w-full h-full object-cover"/>
        {/* Overlay Text */}
        <div className="absolute flex  inset-0 items-center px-4 :md:px-40">
          <div className=''>
            <div className="text-blac text-4xl md:text-8xl font-bold drop-shadow-lg">
              MoodMatch
            </div>
            <div className="text-black text-2xl md:text-4xl font-bold drop-shadow-lg mt-1 md:mt-2 mb-5">
              Summer Collection
            </div>
            <button className='btn md:btn btn-sm text-white bg-black'>SHOP NOW</button>
          </div>
        </div>
    </div>
  )
}

export default HeroBanner

