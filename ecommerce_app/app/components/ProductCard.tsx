import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '../products/page';

const ProductCard = async ({params} : {params : {product : Product , index : number }}) => {

  
    const product = (await params).product;
    const index = (await params).index;

  return (
    <div key={index} className="h-130 w-75 rounded-xl p-2 bg-gray-50 border-2 border-gray-200 overflow-hidden flex flex-col justify-around ">
        <h1 className='hidden'>{product.id}</h1>
        <div className='bg-red-200 rounded-t-xl'>
          <Image  src={product.images[0]} alt="Product-image" width={200} height={150} className='place-self-center border-b  h-auto w-auto' /> 
        </div>
        <h1 className='font-bold text-xl h-fit'>{product.title}</h1>
        <h1 className='font-medium'><span className='font-bold'>Price:</span> ${product.price}</h1>
        <h1 className='font-mono h-18 overflow-y-auto scrollbar-hidden'> <span className='font-bold'>Description:</span> {product.description}</h1>
        <h1 className='font-medium' ><span className='font-bold'>Category: </span>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</h1>
        <h1><span className='font-bold'>Remaining: </span>{product.stock}</h1>
        <Link href={`/products/${product.id}`} className='flex justify-center'><button type="button" className="font-bold text-md bg-red-900 w-full text-white px-2 rounded-2xl py-1 cursor-pointer hover:bg-white hover:text-pink-600" >Preview</button></Link>
    </div>
  )
}

export default ProductCard
