import Image from 'next/image';
type Product = {
  id: number;
  title: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  sku: string;
  tags: string[];
  availabilityStatus: string; // e.g., "In Stock"
  images: string[];
  thumbnail: string;
  minimumOrderQuantity: number;
  returnPolicy: string;
  shippingInformation: string;
  warrantyInformation: string;
  weight: number;

  dimensions: {
    width: number;
    height: number;
    depth: number;
  };

  meta: {
    createdAt: string; // ISO date
    updatedAt: string; // ISO date
    barcode: string;
    qrCode: string;
  };

  reviews: {
    user: string;
    rating: number;
    comment: string;
    createdAt: string;
  }[];
};

const ProductCard = async ({params} : {params : {product : Product , index : number }}) => {
    const product = (await params).product;
    const index = (await params).index;

  return (
    <div className="h-130 w-75 rounded-xl p-2 bg-gray-50 border-2 border-gray-200 overflow-hidden flex flex-col justify-around  ">
        <h1 className="hidden">{index}</h1>
        <div className='bg-red-200 rounded-t-xl'>
          <Image  src={product.images[0]} alt="Product-image" width={200} height={150} className='place-self-center border-b  h-auto w-auto' /> 
        </div>
        <h1 className='font-bold text-xl h-fit'>{product.title}</h1>
        <h1 className='font-medium'><span className='font-bold'>Price:</span> ${product.price}</h1>
        <h1 className='font-mono h-18 overflow-y-auto'> <span className='font-bold'>Description:</span> {product.description}</h1>
        <h1 className='font-medium' ><span className='font-bold'>Category: </span>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</h1>
        <h1><span className='font-bold'>Remaining: </span>{product.stock}</h1>
    </div>
  )
}

export default ProductCard
