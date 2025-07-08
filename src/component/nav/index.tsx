import Image from 'next/image'
import React from 'react'
import { CiSearch, CiShoppingCart } from 'react-icons/ci'
import { FaList } from 'react-icons/fa'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'

function Nav() {
  return (
    <nav className="w-full p-4 bg-base-200 shadow">
        <div className='md:flex justify-between hidden'>
            <div>Support | Track My Order</div>
            <div className='font-bold'>My Account</div>
        </div>
        <div className='flex justify-between pt-5'>
            <div>
                <Image src={'/logo.png'} alt=''  width={35} height={35}/>
            </div>
            <div className='md:flex hidden gap-10 items-center'>
                <div>Men</div>
                <div>Women</div>
                <div>Blog</div>
                <div>About</div>
                <div>Contact</div>
                <div>Contact</div>
                <div><CiSearch className='h-5 w-5' /></div>
                <div><FcLike className='h-5 w-5' /></div>
                <div><CiShoppingCart className='h-5 w-5' /></div>
            </div>
            <div className='md:hidden flex items-center gap-5'>
                <FaList  />
            </div>
        </div>
    </nav>
  )
}

export default Nav