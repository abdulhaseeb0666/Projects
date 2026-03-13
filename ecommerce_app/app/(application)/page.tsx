import CategoryCards from "../components/CategoryCards"
import SaleCard from "../components/SaleCard";
import { categories } from "../components/categoryList";
import type { Metadata } from "next";

export const metadata : Metadata = {
  title: "Home",
  description: "Home Page for CartNova",
}

const Page = async () => {

  return (
    <div>
      <SaleCard />

      <h1 className="text-center font-bold text-4xl m-5 text-red-800 ">Category Cards</h1>
      <div className="flex flex-wrap justify-around gap-y-3">
      {
        categories.map(({slug , description} : {slug : string , description : string} , index : number) => {
          return(
              <CategoryCards key={index}  params = {{slug , description , index}}  />   
            )
          })
        }
      </div>
      
    </div>
  )
}

export default Page
