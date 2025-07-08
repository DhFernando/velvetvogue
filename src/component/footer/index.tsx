import Image from 'next/image';
import React from 'react';
import {
  FaApple,
  FaFacebookF,
  FaGooglePlay,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white text-xs p-10">
      {/* Top Footer Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
        {/* Logo & Contact */}
        <div className="flex flex-col gap-5 col-span-2 md:col-span-1">
          <div>
            <Image src="/logo.png" alt="Logo" width={55} height={55} />
          </div>
          <div>Lorem ipsum dolor sit amet consectetur</div>
          <div>sales@sales.com</div>
          <div>+94713798234</div>
        </div>

        {/* Information */}
        <div className="flex flex-col gap-3">
          <div className="font-bold text-[18px]">Information</div>
          <div>Men</div>
          <div>Women</div>
          <div>Kids</div>
          <div>Home & Living</div>
          <div>Beauty</div>
        </div>

        {/* Explore */}
        <div className="flex flex-col gap-3">
          <div className="font-bold text-[18px]">Explore</div>
          <div>Blog</div>
          <div>Gift Cards</div>
          <div>Rewards</div>
          <div>Reviews</div>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col gap-3">
          <div className="font-bold text-[18px]">Contact Us</div>
          <div>FAQ</div>
          <div>Track Orders</div>
          <div>Shipping</div>
          <div>Cancellation</div>
          <div>Returns</div>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-3">
          <div className="font-bold text-[18px]">Support</div>
          <div>Help Center</div>
          <div>News</div>
          <div>Career</div>
          <div>Terms of Use</div>
        </div>
      </div>

      <div className="divider my-6 border-gray-700" />

      {/* Bottom Footer Row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-5 text-center md:text-left">
        <div>© 2025 VelvetVogue, All Rights Reserved</div>
        <div>Privacy Policy | Terms & Conditions</div>
        <div className="flex gap-4">
          <FaFacebookF className="text-white w-4 h-4" />
          <FaTwitter className="text-white w-4 h-4" />
          <FaInstagramSquare className="text-white w-4 h-4" />
          <FaGooglePlay className="text-white w-4 h-4" />
          <FaYoutube className="text-white w-4 h-4" />
          <FaApple className="text-white w-4 h-4" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
