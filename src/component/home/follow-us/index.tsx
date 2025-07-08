import React from 'react';

function FollowUsOnInstagram() {
  return (
    <div className="my-10 px-4 md:px-10">
      <div className="font-bold text-2xl md:text-3xl text-center mb-8">
        Follow Us on Instagram
      </div>


      {/* Instagram Image Grid */}
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
        {[1, 2, 3, 4].map((img) => (
          <div key={img} className="w-full h-56 overflow-hidden rounded shadow-md">
            <img
              src={`/followus/${img}.png`}
              alt={`Instagram Post ${img}`}
              className="w-full h-full object-cover brightness-75"
            />
          </div>
        ))}
      </div>

      {/* Newsletter Subscribe Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-10 text-center md:text-left">
        <div>
          <div className="font-bold text-xl">Subscribe to Newsletter</div>
          <div className="text-gray-600">Get the latest updates on promotions</div>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter your email"
            className="input input-bordered w-[72%]"
          />
          <button className="btn bg-black text-white">Join</button>
        </div>
      </div>
    </div>
  );
}

export default FollowUsOnInstagram;
