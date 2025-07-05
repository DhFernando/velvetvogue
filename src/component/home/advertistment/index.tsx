import React from 'react'

function Advertiestment() {
  return (
    <div className='my-10 flex'>
        <div className=''><img src={'/home-ad-image.png'} alt="" className="brightness-75"/></div>
        <div className='px-10 flex flex-col gap-5'>
            <div className='text-3lx'>(59% OFF)</div>
            <div className='text-4xl'>Urban Drift</div>
            <div>is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</div>
            <div className='text-2xl font-bold flex gap-4'>
                <div>$491</div>
                <div className='text-gray-500'>$199</div>
            </div>
            <div><div className='btn bg-black text-white'>BUY NOW</div></div>
            <div><div className='btn bg-white text-black'>VIEW COLLECTION</div></div>
        </div>
    </div>
  )
}

export default Advertiestment