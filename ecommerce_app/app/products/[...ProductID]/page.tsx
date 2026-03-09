import ProductCard from "@/app/components/ProductCard";
import type { Product } from "../page";

const page = async ({params} : {params : {ProductID : string[]}}) => {

    const ProductID = (await params).ProductID

    const res = await fetch(`https://dummyjson.com/products/category/${ProductID[1]}`);
    const data = await res.json();
    const products = data.products;

  return (
    <div  className="flex flex-wrap justify-start  gap-3 p-3">

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
