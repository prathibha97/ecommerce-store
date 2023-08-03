'use client';
import { Product } from '@/types';
import { Expand, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';
import IconButton from './IconButton';
import Currency from './Currency';

interface ProductCardProps {
  data: Product;
}

const ProductCard: FC<ProductCardProps> = ({ data }) => {
  return (
    <div className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4'>
      {/* IMages and actions */}
      <div className='aspect-square rounded-xl bg-gray-100 relative'>
        <Image
          alt='Image'
          src={data?.images?.[0]?.url}
          fill
          className='aspect-square object-cover rounded-md'
        />
        <div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
          <div className='flex gap-x-6 justify-center'>
            <IconButton
              onClick={() => {}}
              icon={<Expand className='text-gray-600' size={20} />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart className='text-gray-600' size={20} />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className='font-semibold text-lg'>{data.name}</p>
        {/* @ts-ignore */}
        <p className='text-sm text-gray-500'>{data.category?.name}</p>
      </div>
      {/* price */}
      <div className='flex items-center justify-between'>
        <Currency value={data?.price}/>
      </div>
    </div>
  );
};

export default ProductCard;