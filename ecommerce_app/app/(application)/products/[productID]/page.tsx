import ImageGallery from "@/app/components/ImageGallery";
import type { Product } from "../page";
import Link from "next/link";
import ProductReview from "@/app/components/ProductReview";
import ProductCard from "@/app/components/ProductCard";
import type { Metadata } from "next";
import AddToCart from "@/app/components/AddToCart";

export const metadata : Metadata = {
  title: "Product",
  description: "Product from CartNova",
}

const page = async ({params} : {params : {productID : string}}) => {
 
  const productID = (await params).productID;
  const res = await fetch(`https://dummyjson.com/products/${productID}`);
  const data = await res.json();
  const product : Product = data;

  const reviews  = product.reviews;
  const category = product.category;

  const res2 = await fetch(`https://dummyjson.com/products/category/${category}`);
  const data2 = await res2.json();
  const products = data2.products;

  const productImages = product.images;

  return (
    <div className="flex flex-col">
      <div className="flex p-5 border-b-2 border-b-gray-300 m-3 max-[900px]:flex-col
                  max-[700px]:p-4
                  max-[500px]:p-3
                  max-[200px]:p-1">
        <div className="flex flex-col justify-start items-start max-[900px]:items-center
                    max-[900px]:w-full">
          <ImageGallery params={{productImages}} />
        </div>
        <div className="px-5 w-[60%] flex flex-col gap-3 max-[900px]:w-full
                    max-[700px]:px-3
                    max-[500px]:px-2
                    max-[200px]:px-1">
          <h1 className="text-4xl font-bold max-[900px]:text-3xl
                     max-[700px]:text-2xl
                     max-[500px]:text-xl
                     max-[200px]:text-lg">{product.title}</h1>
          <p className="font-medium text-2xl text-gray-700 max-[900px]:text-xl
                    max-[700px]:text-lg
                    max-[500px]:text-md
                    max-[200px]:text-sm">{product.description}</p>
          <p className="text-xl font-bold max-[700px]:text-lg
                    max-[500px]:text-md
                    max-[200px]:text-sm">${product.price.toFixed(0)}</p>
          <p className="text-md"><b>Stock:</b> {product.stock}</p>
          <p className="text-md max-[500px]:text-sm max-[200px]:text-xs">
            <b>Category: </b> 
            <Link href={`/products/categories/${product.category}`}>
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)} 
            </Link> 
          </p>
          <p  className="text-md max-[500px]:text-sm max-[200px]:text-xs"><b>Rating:</b> {product.rating}</p>
          <p  className="text-md max-[500px]:text-sm max-[200px]:text-xs"><b>Brand:</b> {product.brand}</p>
          <p  className="text-md max-[500px]:text-sm max-[200px]:text-xs"><b>Discount:</b> {product.discountPercentage}%</p>
          <AddToCart params={{product}} />
        </div>
      </div >
      <ProductReview params={{reviews}}/>
      <div>
        <h1 className="text-3xl font-bold text-center p-3 m-3 border-t-2 border-t-gray-300 max-[700px]:text-2xl
                   max-[500px]:text-xl
                   max-[200px]:text-lg">Related Products</h1>
        <div  className="flex flex-wrap overflow-hidden justify-around gap-3 p-3 max-[700px]:justify-center
                    max-[500px]:gap-2
                    max-[200px]:gap-1">
          {
            products.map((product : Product , index : number) => {
              return(
                <ProductCard key={index} params={{ product, index }} />
              )
            })
          }
        </div>      
      </div>
    </div>
  )
}

export default page
