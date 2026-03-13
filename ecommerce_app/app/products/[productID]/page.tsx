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
      <div className="flex p-5 border-b-2 border-b-gray-300 m-3">
        <div className="flex flex-col justify-start items-start">
          <ImageGallery params={{productImages}} />
        </div>
        <div className="px-5 w-[60%] flex flex-col gap-3">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="font-medium text-2xl text-gray-700">{product.description}</p>
          <p className="text-xl font-bold">${product.price.toFixed(0)}</p>
          <p className="text-md"><b>Stock:</b> {product.stock}</p>
          <p className="text-md">
          <b>Category: </b> 
          <Link href={`/products/categories/${product.category}`}>
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)} 
          </Link> 
          </p>
          <p  className="text-md"><b>Rating:</b> {product.rating}</p>
          <p  className="text-md"><b>Brand:</b> {product.brand}</p>
          <p  className="text-md"><b>Discount:</b> {product.discountPercentage}%</p>
          <AddToCart params={{product}} />
        </div>
      </div >
      <ProductReview params={{reviews}}/>
      <div>
        <h1 className="text-3xl font-bold text-center p-3 m-3 border-t-2 border-t-gray-300">Related Products</h1>
        <div  className="flex flex-wrap overflow-hidden justify-around  gap-3 p-3">
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
