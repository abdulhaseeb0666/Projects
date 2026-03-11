import ProductCategories from "../components/ProductCategories";
import ProductCard from "../components/ProductCard";
import type { Metadata } from "next";

export const metadata : Metadata = {
  title: "Products",
  description: "Products Page for CartNova",
}


export type Product = {
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
    comment : string;
    date : string;
    rating : number;
    reviewerEmail : string;
    reviewerName : string;
  }[];
};

const Page = async () => {

  const res = await fetch("https://dummyjson.com/products?sortBy=title&order=asc&limit=100");
  const products = await res.json();
  const Products = products.products;
  
  return (
    <div>
      <ProductCategories />

      <div className="flex flex-wrap justify-around gap-y-10 p-3 max-[900px]:gap-y-8 max-[700px]:gap-y-6 max-[500px]:gap-y-4 max-[200px]:gap-y-2">
        { 
          Products.map((product : Product , index : number) => {
            return(
              <ProductCard params={{ product, index }} key={index}/>
            )
          })
        }
      </div>

    </div>
  )
}

export default Page
