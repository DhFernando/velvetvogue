import React from 'react'

function FollowUsOnInstergram() {
  return (
    <div className='my-5'>
        <div className='font-bold text-3xl mb-5'>Follow on Instagram</div>
        {/* images */}
        <div className='flex gap-7 justify-center'>
            <div className="bg-base-100 w-56">
                <div className='h-56'>
                    <img src={'/followus/1.png'} alt="" className="w-full h-full object-cover brightness-75"/> 
                </div>
            </div>
            <div className="bg-base-100 w-56">
                <div className='h-56'>
                    <img src={'/followus/2.png'} alt="" className="w-full h-full object-cover brightness-75"/> 
                </div>
            </div>
            <div className="bg-base-100 w-56">
                <div className='h-56'>
                    <img src={'followus/3.png'} alt="" className="w-full h-full object-cover brightness-75"/> 
                </div>
            </div>
            <div className="bg-base-100 w-56">
                <div className='h-56'>
                    <img src={'/followus/4.png'} alt="" className="w-full h-full object-cover brightness-75"/> 
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center gap-5 mt-10'>
            <div>
                <div className='font-bold text-xl'>Subscribe Newsletter</div>
                <div>Get Latest Updates on Promotions</div>
            </div>
            <div className='flex'>
                <div className=''><input type="text" className='input w-72'/></div>
                <div><button className='btn bg-black text-white'>Join</button></div>
            </div>
        </div>
    </div>
  )
}

export default FollowUsOnInstergram