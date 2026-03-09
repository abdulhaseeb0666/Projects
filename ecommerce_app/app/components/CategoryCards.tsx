import Link from "next/link";

const CategoryCards = async ({params} : {params : {slug : string , description : string , index : number }}) => {

    const category = (await params).slug;
    const description = (await params).description;
    const index = (await params).index;

  return (
    <div key={index} className="bg-pink-500 text-white w-80 h-45 rounded-xl p-3 flex flex-col items-start justify-between">
        <h1 className="font-bold text-xl">{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
        <p className="font-light text-sm">{description}</p>
        <button className="font-bold text-md bg-red-900 text-white px-2 rounded-2xl py-1 curson-pointer hover:bg-white hover:text-pink-600" ><Link href={`/products/category/${category}`}>Explore Now</Link></button>  
    </div>
  )
}

export default CategoryCards
