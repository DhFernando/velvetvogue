import React from 'react'
import { BsBank2 } from 'react-icons/bs'
import { FaCcMastercard } from 'react-icons/fa'
import { PiMoneyWavy } from 'react-icons/pi'

function PaymentPage() {
  return (
    <div className='px-10 mb-5'>
        <div className='py-3'>Home {'>'} Payment</div>
        <div className='text-3xl font-bold'>Payment</div>
        <div className='flex justify-center'>
            <div>
                <div>Payment Method</div>
                <div className='flex gap-3'>
                     <div className='flex items-center gap-5 p-3 border border-gray-400'><input type="radio" /> <div><FaCcMastercard className='w-7 h-7' /></div> <div>Card</div></div>
                     <div className='flex items-center gap-5 p-3 border border-gray-400'><input type="radio" /> <div><BsBank2 className='w-7 h-7' /></div> <div>Card</div></div>
                     <div className='flex items-center gap-5 p-3 border border-gray-400'><input type="radio" /> <div><PiMoneyWavy className='w-7 h-7' /></div> <div>Card</div></div>
                </div>
                <div className='divider'></div>
                <div className='flex flex-col gap-6 mb-5'>
                    <div><input className='input w-full' type="text" placeholder='Card Number*' /></div>
                    <div className='flex gap-3 w-full'>
                        <input className='input w-full' type="text" placeholder='Expire Date*' />
                        <input className='input w-full' type="text" placeholder='CVC*' />
                    </div>
                    <div className='flex'>
                        <input className='input w-full' type="text" placeholder='Add promo code' />
                        <button className='btn bg-black text-white'>Apply</button>
                    </div>
                </div>
                <div>
                    <button className='btn bg-black text-white'>Continue Payment</button>
                </div>
                <div className='flex gap-3 my-10'>
                    <img src={'/category-banner/1.png'} alt="" className="w-28 h-8 object-cover brightness-75"/> 
                    <img src={'/category-banner/1.png'} alt="" className="w-28 h-8 object-cover brightness-75"/> 
                    <img src={'/category-banner/1.png'} alt="" className="w-28 h-8 object-cover brightness-75"/> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentPage