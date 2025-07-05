import ProductCard from '@/component/product-card'
import React from 'react'

function HomeProductList() {
  return (
    <div>
        <div className='text-3xl font-bold my-5'>Best Selling Products</div>
        <div className='flex flex-wrap gap-5'>
            {Array.from({ length: 8 }).map((_, index) => (
                <ProductCard key={index} />
            ))}
        </div>
        <div className='flex justify-center my-10'>
            <div className='btn'>VIEW ALL</div>
        </div>
    </div>
  )
}

export default HomeProductList