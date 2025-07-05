import React from 'react'

function CategoryAccessBanner() {
  return (
    <div className="grid grid-flow-col grid-rows-2 gap-4 pb-5">
        <div className="col-span-2 row-span-1">
            <div className='relative'>
                <img src={'/category-banner/1.png'} alt="" className="w-full h-full object-cover brightness-75"/>
                {/* Overlay Text */}
                <div className="absolute flex  inset-0 items-center px-20">
                  <div className='text-white '>
                    <div className="text-4xl font-bold drop-shadow-lg">
                      INTRODUCING OUR
                    </div>
                    <div className="  text-2xl font-bold drop-shadow-lg">
                      RAW THREADS COLLECTION
                    </div>
                    <div className='text-sm my-5'>
                      as opposed to using 'Content here, content here', <br /> making it look like readable English
                    </div>
                    <button className='btn  bg-black text-white '>SHOP NOW</button>
                  </div>
                </div>
            </div>
        </div>
        <div className="col-span-2 row-span-1">
          <div className='relative'>
              <img src={'/category-banner/2.png'} alt="" className="w-full object-cover"/>
              {/* Overlay Text */}
               <div className="absolute flex  inset-0 items-center px-20">
                  <div className='text-white '>
                    <div className="text-4xl font-bold drop-shadow-lg">
                      INTRODUCING OUR
                    </div>
                    <div className="  text-2xl font-bold drop-shadow-lg">
                      NEW WINTER COLLECTION
                    </div>
                    <div className='text-sm my-5'>
                      as opposed to using 'Content here, content here', <br /> making it look like readable English
                    </div>
                    <button className='btn  bg-black text-white '>SHOP NOW</button>
                  </div>
                </div>
          </div>
        </div>
        <div className="col-span-1 row-span-2">
          <div className='relative'>
            <img src={'/category-banner/3.png'} alt="" className="h-full object-cover"/>
            {/* Overlay Text */}
             <div className="absolute flex  inset-0 items-center px-20">
                  <div className='text-white '>
                    <div className="text-4xl font-bold drop-shadow-lg">
                      INTRODUCING OUR
                    </div>
                    <div className="  text-2xl font-bold drop-shadow-lg">
                      SUMMER COLLECTION
                    </div>
                    <div className='text-sm my-5'>
                      as opposed to using 'Content here, content here', <br /> making it look like readable English
                    </div>
                    <button className='btn  bg-black text-white '>SHOP NOW</button>
                  </div>
                </div>
        </div>
        </div>
    </div>
  )
}

export default CategoryAccessBanner