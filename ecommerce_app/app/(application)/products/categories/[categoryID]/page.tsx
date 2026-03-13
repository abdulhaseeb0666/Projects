import type { Product } from "../../page";
import ProductCard from "../../../../components/ProductCard";
import type { Metadata } from "next";

export const metadata : Metadata = {
  title: "Categories",
  description: "Categories from CartNova",
}


const page = async ({params} : {params : {categoryID : string}}) => {
    const categoryID = (await params).categoryID;

    const res = await fetch(`https://dummyjson.com/products/category/${categoryID}`);
    const data = await res.json();
    const products = data.products;
  return (
    <div  className="flex flex-wrap justify-around  gap-3 p-3">
        
      {
        products.map((product : Product , index : number) => {
          return(
            <ProductCard params={{ product, index }} key={index} />
          )
        })
      }
      
    </div>
  )
}

export default page
