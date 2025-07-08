import Image from 'next/image';
import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

function ContactPage() {
  return (
    <div className="px-4 md:px-10 mb-10">
      <div className="py-3 text-sm text-gray-500">Home {'>'} Contact Us</div>
      <div className="text-2xl md:text-3xl font-bold">Contact Us</div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
        {/* Contact Form */}
        <div className="flex flex-col gap-5 border p-5 border-gray-300 rounded-md">
          <div className="text-lg font-semibold">Talk to Velvet Vogue</div>
          <input type="text" placeholder="Name" className="input input-bordered w-full" />
          <input type="email" placeholder="Email" className="input input-bordered w-full" />
          <input type="text" placeholder="Contact Number" className="input input-bordered w-full" />
          <select className="select select-bordered w-full" defaultValue="">
            <option disabled value="">Purpose</option>
            <option>Feedback</option>
            <option>Support</option>
            <option>General Inquiry</option>
          </select>
          <select className="select select-bordered w-full" defaultValue="">
            <option disabled value="">Preferred Method of Contact</option>
            <option>Email</option>
            <option>Phone</option>
          </select>
          <textarea className="textarea textarea-bordered w-full" placeholder="Your Message"></textarea>
          <button className="btn bg-black text-white">Submit</button>
        </div>

        {/* Info Section */}
        <div className="md:col-span-2 space-y-5 px-2 md:px-10">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="logo" width={35} height={35} />
            <h2 className="text-2xl font-semibold">Velvet Vogue</h2>
          </div>
          <p className="text-sm text-gray-600">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-6 text-sm">
            <div className="flex gap-3 items-center">
              <FaLocationDot className="h-6 w-6 text-orange-500" />
              <div>
                <div className="font-bold">Velvet Vogue</div>
                <div>1000 New Town<br />Spain</div>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <FaFacebookSquare className="text-blue-600 h-6 w-6" />
              <div className="font-bold">Velvet Vogue</div>
            </div>
            <div className="flex gap-3 items-center">
              <FaInstagramSquare className="text-pink-600 h-6 w-6" />
              <div className="font-bold">Velvet Vogue</div>
            </div>
          </div>

          {/* Map Image */}
          <div className="mt-4">
            <img src="/map.png" alt="Map" className="w-full rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
