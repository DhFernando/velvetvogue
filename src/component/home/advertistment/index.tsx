import React from 'react';

function Advertisement() {
  return (
    <div className="my-10 flex flex-col md:flex-row items-center gap-8 px-5">
      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          src="/home-ad-image.png"
          alt="Advertisement"
          className="w-full h-full object-cover brightness-75 rounded"
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <div className="text-3xl text-red-600 font-bold">(59% OFF)</div>
        <div className="text-4xl font-bold">Urban Drift</div>
        <div className="text-gray-700">
          It is a long established fact that a reader will be distracted by the readable content
          of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using 'Content here'.
        </div>
        <div className="text-2xl font-bold flex gap-4 items-center">
          <div>$199</div>
          <div className="text-gray-500 line-through text-xl font-normal">$491</div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="btn bg-black text-white px-6 py-2 rounded">BUY NOW</button>
          <button className="btn bg-white text-black border border-black px-6 py-2 rounded">
            VIEW COLLECTION
          </button>
        </div>
      </div>
    </div>
  );
}

export default Advertisement;
