"use client";

import { useContext } from "react";
import ProductsListAPI from "@/contexts/ProductsListAPI";

const Page = () => {

  const products = useContext(ProductsListAPI);
    console.log(products);

  return (
    <div>
      
    </div>
  )
}

export default Page
