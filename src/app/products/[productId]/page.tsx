// app/products/[productId]/ProductClient.tsx
'use client';

import { useParams } from 'next/navigation';
import ProductView from '@/component/products/product/product-view';

export default function ProductClient() {
  const params = useParams();
  const productId = params.productId as string;

  return (
    <div className="p-10">
      <ProductView id={productId} />
    </div>
  );
}
