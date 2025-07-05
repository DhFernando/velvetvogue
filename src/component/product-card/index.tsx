import React from 'react'
import { FaStar } from 'react-icons/fa'

function ProductCard() {
  return (
    <div className="bg-base-100 w-56">
        <div className='h-56'>
            <img src={'/category-banner/1.png'} alt="" className="w-full h-full object-cover brightness-75"/> 
        </div>
        <div className="flex flex-col gap-2 py-3 text-sm">
            <div className='flex justify-between '>
                <div>StreetMuse</div>
                <div className='flex gap-2 items-center'>
                    <FaStar className='text-yellow-300' />
                    <div>4.2</div>
                </div>
            </div>
            <div>Striped A-Line Top</div>
            <div className='flex justify-between font-bold'>
                <div className='flex gap-3'>
                    <div>$879</div>
                    <div className='text-gray-400'>$1599</div>
                </div>
                <div>(45% OFF)</div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard