import React from 'react'

function MiddleBanner() {
  return (
    <div className=''> 
        <div className='relative'>
                <img src={'/middle-banner.png'} alt="" className="w-full h-full object-cover brightness-75"/>
                {/* Overlay Text */}
                <div className="absolute flex justify-center  inset-0 items-center px-20">
                  <div className='text-white flex flex-col items-center gap-5 '>
                    <div className="text-4xl font-bold drop-shadow-lg">
                      JOIN OUR INLUENCER PROGRAM
                    </div>
                    <div className="  text-2xl   drop-shadow-lg">
                      REFER US AN GET REWARDS
                    </div>
                    <button className='btn bg-white text-black '>READ MORE</button>
                  </div>
                </div>
            </div>
    </div>
  )
}

export default MiddleBanner