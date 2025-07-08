import React from 'react';
import {
  FaCartPlus,
  FaChevronLeft,
  FaChevronRight,
  FaMinus,
  FaPlus,
  FaStar,
} from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';

interface Props {
  id: string;
}

function ProductView({ id }: Props) {
  return (
    <div className="space-y-10">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Gallery */}
        <div className="px-5 md:px-10">
          <div>
            <img
              src="/home-ad-image.png"
              alt=""
              className="w-full object-cover brightness-75 rounded"
            />
          </div>
          <div className="flex justify-center items-center gap-4 mt-4">
            <FaChevronLeft />
            <div className="flex gap-2 overflow-x-auto max-w-full">
              {Array.from({ length: 4 }).map((_, index) => (
                <img
                  key={index}
                  src="/home-ad-image.png"
                  alt=""
                  className="w-20 h-20 object-cover rounded"
                />
              ))}
            </div>
            <FaChevronRight />
          </div>
        </div>

        {/* Product Info */}
        <div className="px-5 md:px-10 flex flex-col gap-4">
          {/* Ratings */}
          <div className="flex flex-wrap gap-5 text-xs items-center">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
            </div>
            <div className="font-bold">82 Reviews</div>
            <div className="font-bold underline cursor-pointer">Write a Review</div>
          </div>

          <div className="text-2xl md:text-4xl font-bold">StreetMuse</div>
          <hr />

          {/* Pricing */}
          <div className="flex flex-wrap gap-3 items-center text-sm md:text-base">
            <div className="text-xl md:text-2xl font-bold">$879</div>
            <div className="line-through text-gray-400 text-lg">$1499</div>
            <div className="text-xl font-bold text-red-500">($975 OFF)</div>
            <div className="text-sm text-gray-500">(Sale Ends, June 15 2025)</div>
          </div>
          <hr />

          {/* Options */}
          <div className="flex flex-col gap-4">
            {/* Colors */}
            <div>
              <div className="font-medium mb-1">More Color</div>
              <div className="flex gap-2">
                <div className="w-10 h-10 bg-white border border-gray-400 rounded" />
                <div className="w-10 h-10 bg-black rounded" />
              </div>
            </div>

            {/* Sizes */}
            <div>
              <div className="font-medium mb-1">Select Size</div>
              <div className="flex gap-2 flex-wrap">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <div
                    key={size}
                    className="w-10 h-10 bg-white border border-gray-400 flex justify-center items-center text-xs rounded"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <div className="font-medium mb-1">Quantity</div>
              <div className="flex gap-3 items-center">
                <button className="border border-gray-400 p-2 rounded-2xl">
                  <FaPlus />
                </button>
                <div>3</div>
                <button className="border border-gray-400 p-2 rounded-2xl">
                  <FaMinus />
                </button>
              </div>
            </div>
          </div>

          <hr />

          {/* Add to Cart / Wishlist */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
            <button className="bg-black text-white w-full py-3 rounded flex justify-center items-center gap-3">
              <FaCartPlus />
              Add to Cart
            </button>
            <button className="border border-gray-400 p-2 rounded-full">
              <FcLike className="w-6 h-6" />
            </button>
          </div>

          <hr />

          {/* Delivery Section */}
          <div className="space-y-3 text-sm">
            <div className="font-semibold">Delivery Options</div>
            <div className="flex flex-col sm:flex-row gap-2">
              <input type="text" className="input input-bordered w-full sm:w-auto" placeholder="Enter PIN" />
              <button className="btn bg-black text-white">Check</button>
            </div>
            <div className="text-gray-500">
              Please enter PIN to check delivery time & pay on delivery availability
            </div>
            <div className="text-gray-500 space-y-1">
              <div>✓ Pay on delivery might be available</div>
              <div>✓ Easy 14 days returns and exchanges</div>
              <div>✓ Try & Buy might be available</div>
            </div>
          </div>

          {/* Product Info Accordions */}
          <div className="space-y-2">
            {[
              ['Product Details', 'Product Details'],
              ['How do I create an account?', 'Specification'],
              ['Customer Photos', 'Customer Photos'],
            ].map(([title, content], i) => (
              <div
                key={i}
                tabIndex={0}
                className="collapse collapse-arrow border border-base-300 bg-base-100"
              >
                <div className="collapse-title font-semibold">{title}</div>
                <div className="collapse-content text-sm">{content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5 text-center sm:text-left px-5">
        <div>
          <div className="font-bold text-lg">Subscribe Newsletter</div>
          <div className="text-gray-500">Get Latest Updates on Promotions</div>
        </div>
        <div className="flex gap-2">
          <input type="text" placeholder="Enter your email" className="input input-bordered w-72" />
          <button className="btn bg-black text-white">Join</button>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
