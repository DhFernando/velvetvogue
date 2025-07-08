import React from 'react';
import ProductSideNav from './side-nav';
import ProductCard from '@/component/product-card';

function ProductsPage() {
  return (
    <div className="text-sm px-4 md:px-5">
      <div className="py-5">Home {'>'} Shop</div>

      {/* Sort Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 py-3 border border-gray-300 mx-1 md:mx-2 gap-3">
        <div>Showing 1 - 20 products of 234 products</div>
        <div className="hidden   md:flex flex-wrap gap-4 text-sm">
          <div className="font-bold">Sort by:</div>
          <div className="cursor-pointer">What's New</div>
          <div className="font-bold cursor-pointer">Popularity</div>
          <div className="cursor-pointer">High to Low</div>
          <div className="cursor-pointer">Low to High</div>
          <div className="cursor-pointer">Customer Rating</div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-5">
        {/* Side Nav - hidden on small screens */}
        <div className="hidden md:block md:col-span-1">
          <ProductSideNav />
        </div>

        {/* Product Grid */}
        <div className="col-span-1 md:col-span-5 p-2 md:p-10">
          <div className="flex flex-wrap gap-5 justify-center md:justify-start">
            {Array.from({ length: 8 }).map((_, index) => (
              <ProductCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
