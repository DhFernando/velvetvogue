import Image from 'next/image'
import React from 'react'
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

function ContactPage() {
  return (
   <div className='px-10 mb-5'>
        <div className='py-3'>Home {'>'} Contact Us</div>
        <div className='text-3xl font-bold'>Contact Us</div>
       <div className="grid grid-cols-3 gap-4 px-10 py-5">
            <div className="flex gap-5 flex-col ">
                <div className='border p-5 border-gray-400'>
                    <div>Talk to Velvet Vogue</div>
                    <div className='flex flex-col gap-4'>
                        <input type="text" placeholder='Name' className='input w-full' />
                        <input type="email" placeholder='Email' className='input w-full' />
                        <input type="text" placeholder='Contact Number' className='input w-full' />
                        <select defaultValue="Pick a color" className="select w-full">
                            <option disabled={true}>Purpose</option>
                            <option>Crimson</option>
                            <option>Amber</option>
                            <option>Velvet</option>
                        </select>
                        <select defaultValue="Pick a color" className="select w-full">
                            <option disabled={true}>Prefferred Method of Contact</option>
                            <option>Crimson</option>
                            <option>Amber</option>
                            <option>Velvet</option>
                        </select>
                        <textarea className="textarea w-full" placeholder="Bio"></textarea>
                        <div>
                            <button className='btn bg-black text-white'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-2 px-10">
                <div className='flex items-center gap-5'>
                    <Image src={'/logo.png'} alt=''  width={35} height={35}/>
                    <div className='text-3xl'>Velvet Vogue</div>
                </div>
                <div className='py-5'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)
                </div>
                <div className='flex gap-8 my-5'>
                    <div className='flex gap-3 items-center'>
                        <div><FaLocationDot className='h-7 w-7 text-orange-400' /></div>
                        <div>
                            <div className='font-bold'>Velvet Vogue</div>
                            <div className='text-xs'>1000 New Town <br /> Spain </div>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div><FaFacebookSquare className='text-blue-600 h-7 w-7' /></div>
                        <div>
                            <div className='font-bold'>Velvet Vogue</div> 
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div><FaInstagramSquare className='h-7 w-7' /></div>
                        <div>
                            <div className='font-bold'>Velvet Vogue</div> 
                        </div>
                    </div>
                </div>
                <div>
                    <img src={'/map.png'} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactPage