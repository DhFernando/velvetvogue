import React from 'react';
import { BsBank2 } from 'react-icons/bs';
import { FaCcMastercard } from 'react-icons/fa';
import { PiMoneyWavy } from 'react-icons/pi';

function PaymentPage() {
  return (
    <div className="px-4 md:px-10 mb-10">
      <div className="py-3 text-sm text-gray-500">Home {'>'} Payment</div>
      <div className="text-2xl md:text-3xl font-bold mb-6">Payment</div>

      <div className="flex justify-center">
        <div className="w-full max-w-2xl space-y-6">
          {/* Payment Method */}
          <div>
            <div className="text-lg font-medium mb-2">Payment Method</div>
            <div className="flex flex-col sm:flex-row gap-4">
              <label className="flex items-center gap-4 p-3 border border-gray-300 rounded cursor-pointer w-full sm:w-auto">
                <input type="radio" name="payment" className="radio" />
                <FaCcMastercard className="w-6 h-6" />
                <span>Card</span>
              </label>
              <label className="flex items-center gap-4 p-3 border border-gray-300 rounded cursor-pointer w-full sm:w-auto">
                <input type="radio" name="payment" className="radio" />
                <BsBank2 className="w-6 h-6" />
                <span>Bank Transfer</span>
              </label>
              <label className="flex items-center gap-4 p-3 border border-gray-300 rounded cursor-pointer w-full sm:w-auto">
                <input type="radio" name="payment" className="radio" />
                <PiMoneyWavy className="w-6 h-6" />
                <span>Cash</span>
              </label>
            </div>
          </div>

          <div className="divider"></div>

          {/* Payment Details */}
          <div className="space-y-5">
            <input
              className="input input-bordered w-full"
              type="text"
              placeholder="Card Number*"
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Expire Date*"
              />
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="CVC*"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Add promo code"
              />
              <button className="btn bg-black text-white w-full sm:w-auto">
                Apply
              </button>
            </div>
          </div>

          {/* Continue Button */}
          <div>
            <button className="btn bg-black text-white w-full">Continue Payment</button>
          </div>

          {/* Logos */}
          <div className="flex gap-3 flex-wrap justify-center mt-8">
            <img
              src="/category-banner/1.png"
              alt=""
              className="w-28 h-8 object-cover brightness-75 rounded"
            />
            <img
              src="/category-banner/1.png"
              alt=""
              className="w-28 h-8 object-cover brightness-75 rounded"
            />
            <img
              src="/category-banner/1.png"
              alt=""
              className="w-28 h-8 object-cover brightness-75 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
