import React from 'react'
import { FaCartPlus, FaChevronLeft, FaChevronRight, FaMinus, FaPlus, FaStar } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';

interface Props {
    id: string;
}
function ProductView({ id }: Props) {
  return (
    <div>
        <div className="grid grid-cols-2 gap-4">
            <div className='px-10'>
                <div>
                    <img src={'/home-ad-image.png'} alt="" className="brightness-75"/>
                </div>
                <div className='flex justify-center p-5 items-center gap-5'>
                    <div><FaChevronLeft /></div>
                    <div className='flex gap-3'>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <img src={'/home-ad-image.png'} alt="" className="brightness-75 w-20"/>
                        ))}
                    </div>
                    <div><FaChevronRight /></div>
                </div>
            </div>
            <div className='px-10 flex flex-col gap-2'>
                <div className='flex gap-5 text-xs'>
                    <div className='flex gap-1'>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <FaStar key={index} className="text-yellow-500" />
                        ))}
                    </div>
                    <div className='font-bold'>82 Reviews</div>
                    <div className='font-bold underline'>Write a Review</div>
                </div>
                <div className='text-4xl font-bold'>StreetMuse</div>
                <span className='divider my-0' />
                <div className='flex gap-3 items-center'>
                    <div className='text-2xl font-bold'>$879</div>
                    <div className='text-xl line-through text-gray-400'>$1499</div>
                    <div className='text-2xl font-bold'>($975 OFF)</div>
                    <div className='text-lg'>(Sale Ends, June 15 2025)</div>
                </div>
                <span className='divider my-0' />
                <div className='flex flex-col gap-4'>
                    <div>
                        <div>More Color</div>
                        <div className='flex gap-2'>
                            <div className='w-10 h-10 bg-white border-gray-400 border'></div>
                            <div className='w-10 h-10 bg-black'></div>
                        </div>
                    </div>
                    <div>
                        <div>Select Size</div>
                        <div className='flex gap-2'>
                            <div className='w-10 h-10 bg-white border-gray-400 border flex justify-center items-center'>XS</div>
                            <div className='w-10 h-10 bg-white border-gray-400 border flex justify-center items-center'>S</div>
                            <div className='w-10 h-10 bg-white border-gray-400 border flex justify-center items-center'>M</div>
                            <div className='w-10 h-10 bg-white border-gray-400 border flex justify-center items-center'>L</div>
                            <div className='w-10 h-10 bg-white border-gray-400 border flex justify-center items-center'>XL</div>
                            <div className='w-10 h-10 bg-white border-gray-400 border flex justify-center items-center'>XXL</div>
                        </div>
                    </div>
                    <div>
                        <div>Quantity</div>
                        <div className='flex gap-3 items-center'>
                            <div className='border border-gray-400 p-2 rounded-2xl'><FaPlus /></div>
                            <div>3</div>
                            <div className='border border-gray-400 p-2 rounded-2xl'><FaMinus /></div>
                        </div>
                    </div>
                </div>
                <span className='divider my-0' />
                <div className='flex items-center gap-10'>
                    <button className=' bg-black text-white w-full py-3'>
                        <div className='flex items-center gap-5 justify-center'>
                            <FaCartPlus className=''/>
                            Add to cart
                        </div>
                    </button>
                    <div className='rounded-4xl  border p-2 border-gray-400'>
                        <FcLike className='w-6 h-6 '/>
                    </div>
                </div>
                <span className='divider my-0' />
                <div className='flex flex-col gap-3'>
                    <div>Delivery Options</div>
                    <div className='flex'>
                        <input type="text" className='input' />
                        <button className='btn bg-black text-white'>Check</button>
                    </div>
                    <div className='text-sm text-gray-400'>
                        <div>Please enter PIN to check delivery time & pay on Delivery Availablity</div>
                    </div>
                    <div className='flex flex-col gap-3 text-sm text-gray-400 py-4'>
                        <div>Pay on delivery might be available</div>
                        <div>Easy 14 days returns and exchanges</div>
                        <div>Try & Buy might be available</div>
                    </div>
                </div>
                <div>
                    <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
                        <div className="collapse-title font-semibold">Product Details</div>
                        <div className="collapse-content text-sm">
                            Product Details
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
                        <div className="collapse-title font-semibold">How do I create an account?</div>
                        <div className="collapse-content text-sm">
                            Specification
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
                        <div className="collapse-title font-semibold">Customer Photos</div>
                        <div className="collapse-content text-sm">
                            Customer Photos
                        </div>
                    </div>
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

export default ProductView