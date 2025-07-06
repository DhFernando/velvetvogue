import ProductView from '@/component/products/product/product-view';
import React from 'react'

interface Props {
    params:{
        productId: string;
    }
}
function Product({ params }: Props) {
    const { productId } = params;
  return (
    <div className='p-10'> 
        <ProductView id={productId} />
    </div>
  )
}

export default Product