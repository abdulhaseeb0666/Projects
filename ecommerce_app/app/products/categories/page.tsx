import CategoryCards from "@/app/components/CategoryCards";
import { categories } from "@/app/components/categoryList";
import type { Metadata } from "next";

export const metadata : Metadata = {
  title: "Categories",
  description: "Categories Page for CartNova",
}


const page = () => {
  return (
    <div className="flex flex-wrap justify-around p-5 gap-5">
        {
            categories.map(({slug , description} : {slug : string , description : string} , index : number) =>{
              return(
                  <CategoryCards key={index}  params = {{slug , description , index}}  />   
                )
            })
        }
    </div>
  )
}

export default page
