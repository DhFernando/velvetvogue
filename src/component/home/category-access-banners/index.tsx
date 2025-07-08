import React from 'react';

function CategoryAccessBanner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-5">
      {/* Large Top Banner (Spans 2 columns on md+) */}
      <div className="md:col-span-2">
        <div className="relative">
          <img src={'/category-banner/1.png'} alt="" className="w-full h-full min-h-[40vh] object-cover brightness-75" />
          <div className="absolute inset-0 flex items-center px-5 md:px-20">
            <div className="text-white">
              <div className="text-xl md:text-4xl font-bold drop-shadow-lg">
                INTRODUCING OUR
              </div>
              <div className="text-md md:text-2xl font-bold drop-shadow-lg">
                RAW THREADS COLLECTION
              </div>
              <div className="text-sm my-5">
                as opposed to using 'Content here, content here', <br /> making it look like readable English
              </div>
              <button className="btn btn-sm md:btn bg-black text-white">SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Banner (Right Column on md+) */}
      <div className="md:row-span-2">
        <div className="relative h-full">
          <img src={'/category-banner/3.png'} alt="" className="w-full h-full min-h-[40vh] object-cover" />
          <div className="absolute inset-0 flex items-center px-5 md:px-10">
            <div className="text-white">
              <div className="text-xl md:text-4xl font-bold drop-shadow-lg">
                INTRODUCING OUR
              </div>
              <div className="text-md md:text-2xl font-bold drop-shadow-lg">
                SUMMER COLLECTION
              </div>
              <div className="text-sm my-5">
                as opposed to using 'Content here, content here', <br /> making it look like readable English
              </div>
              <button className="btn btn-sm md:btn bg-black text-white">SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner (Spans 2 columns on md+) */}
      <div className="md:col-span-2">
        <div className="relative">
          <img src={'/category-banner/2.png'} alt="" className="w-full h-full min-h-[40vh] object-cover" />
          <div className="absolute inset-0 flex items-center px-5 md:px-20">
            <div className="text-white">
              <div className="text-xl md:text-4xl font-bold drop-shadow-lg">
                INTRODUCING OUR
              </div>
              <div className="text-md md:text-2xl font-bold drop-shadow-lg">
                NEW WINTER COLLECTION
              </div>
              <div className="text-sm my-5">
                as opposed to using 'Content here, content here', <br /> making it look like readable English
              </div>
              <button className="btn btn-sm md:btn bg-black text-white">SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryAccessBanner;
