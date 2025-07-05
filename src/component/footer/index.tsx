import Image from 'next/image'
import React from 'react'
import { FaApple, FaFacebookF, FaGooglePlay, FaInstagramSquare, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <div className='bg-black p-10 text-white text-xs'>
        <div className='flex flex-wrap justify-between '>
            <div className='flex flex-col gap-5'>
                <div> <Image src={'/logo.png'} alt=''  width={55} height={55}/></div>
                <div>Lorem ipsum dolor sit amet consectetur</div>
                <div>sales@sales.com</div>
                <div>+94713798234</div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='font-bold text-[18px]'>Infomation</div>
                <div>Men</div>
                <div>Woman</div>
                <div>Kids</div>
                <div>Home & Living</div>
                <div>Beauty</div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='font-bold text-[18px]'>Explore</div>
                <div>Blog</div>
                <div>Gift Cards</div>
                <div>Rewards</div>
                <div>Reviews</div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='font-bold text-[18px]'>Contact Us</div>
                <div>FAQ</div>
                <div>Track Orders</div>
                <div>Shipping</div>
                <div>Cancellation</div>
                <div>Returns</div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='font-bold text-[18px]'>Support</div>
                <div>Help Center</div>
                <div>News</div>
                <div>Cereer</div>
                <div>Terms of Use</div>
            </div>
        </div>
        <div className='divider'></div>
        <div className='flex justify-between mt-5'>
            <div>@ 2025 velvetvogue, All Rights, Reserved</div>
            <div>Privacey Policy | Ters & Conditions</div>
            <div className='flex gap-5'>
                <div><FaFacebookF className='text-white w-4 h-4' /></div>
                <div><FaTwitter   className='text-white w-4 h-4' /></div>
                <div><FaInstagramSquare  className='text-white w-4 h-4' /></div>
                <div><FaGooglePlay className='text-white w-4 h-4' /></div>
                <div><FaYoutube className='text-white w-4 h-4' /></div>
                <div><FaApple className='text-white w-4 h-4' /></div>
            </div>
        </div>
    </div>
  )
}

export default Footer