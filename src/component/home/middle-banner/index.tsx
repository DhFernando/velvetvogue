import React from 'react';

function MiddleBanner() {
  return (
    <div className="my-10">
      <div className="relative">
        <img
          src="/middle-banner.png"
          alt="Middle Banner"
          className="w-full h-full min-h-[40vh] max-h-[70vh] object-cover brightness-75"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex justify-center items-center px-5 md:px-20">
          <div className="text-white flex flex-col items-center gap-4 text-center">
            <div className="text-2xl md:text-4xl font-bold drop-shadow-lg">
              JOIN OUR INFLUENCER PROGRAM
            </div>
            <div className="text-lg md:text-2xl drop-shadow-lg">
              REFER US AND GET REWARDS
            </div>
            <button className="btn bg-white text-black px-6 py-2 rounded shadow">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleBanner;
