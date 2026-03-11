import Link from "next/link";

const ProductCategories = async () => {

    const res = await fetch("https://dummyjson.com/products/category-list")
    const categories = await res.json()
    
    return (
    <div className="bg-orange-600 w-full h-fit" >
        <ul className="flex justify-between overflow-x-auto scrollbar-hidden h-fit gap-13 p-2 max-[900px]:gap-10 max-[700px]:gap-6 max-[500px]:gap-4 max-[200px]:gap-2">
            {
                categories.map((category: string , index : number) => {
                    return(
                        <li key={index} className="text-white font-bold text-2xl whitespace-nowrap w-fit px-1 rounded-md cursor-pointer hover:text-gray-700 max-[900px]:text-xl max-[700px]:text-lg max-[500px]:text-base max-[200px]:text-sm max-[200px]:px-0.5"><Link href={`/products/categories/${category}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</Link></li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default ProductCategories
