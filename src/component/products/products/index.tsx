import React from 'react'
import ProductSideNav from './side-nav'
import ProductCard from '@/component/product-card'

function ProductsPage() {
  return (
    <div className='text-sm px-5'>
        <div className='py-5'>Home {'>'} Shop</div>
        <div className='flex justify-between items-center px-5 py-3 border border-gray-400 mx-2'>
            <div>
                <div>Showing 1 - 20 products of 234 products</div>
            </div>
            <div className='flex gap-5'> 
                <div className='font-bold'>Sort by:</div>
                <div>What's New</div> 
                <div className='font-bold'>Popularity</div> 
                <div>High to Low</div> 
                <div>Low to high</div> 
                <div>Customer Rating</div> 
            </div>
        </div>
        <div>
            <div className="grid grid-cols-6 gap-4"> 
                <div className="col-span-1"><ProductSideNav /></div> 
                <div className="col-span-5 p-10">
                    <div className='flex flex-wrap gap-5'>
                        {Array.from({ length: 8 }).map((_, index) => (
                            <ProductCard key={index} />
                        ))}
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default ProductsPage