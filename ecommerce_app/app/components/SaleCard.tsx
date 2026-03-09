import Link from "next/link"
import Advertisement from "./Advertisement"

const SaleCard = () => {
  return (
    <div className="bg-red-600 h-100 m-5 rounded-3xl flex">
      <div className="w-[50%] px-10 flex flex-col justify-center">
        <h1 className="font-bold text-6xl text-white p-5">15% Off</h1>
        <h1 className="font-bold text-6xl text-white p-5">Ready to Gift Cookies</h1>
        <Link href={"/products"} className="font-bold text-3xl text-white bg-blue-900 h-fit w-fit mx-5 px-2 py-1 rounded-xl hover:bg-blue-800 " >Shop Now </Link>
      </div>
      
      <div className="w-[50%] flex justify-center items-center">
        <Advertisement />
      </div>
    </div>
  )
}

export default SaleCard
