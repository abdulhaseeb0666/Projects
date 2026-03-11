import Link from "next/link"
import Advertisement from "./Advertisement"

const SaleCard = () => {
  return (
    <div className="bg-red-600 h-100 m-5 rounded-3xl flex max-[900px]:flex-col max-[900px]:h-auto max-[900px]:py-8">
      <div className="w-[50%] px-10 flex flex-col justify-center max-[900px]:w-full max-[800px]:px-6 max-[700px]:items-center max-[700px]:text-center max-[500px]:px-4 max-[200px]:px-2">
        <h1 className="font-bold text-6xl text-white p-5 max-[800px]:text-5xl max-[700px]:text-4xl max-[500px]:text-3xl max-[200px]:text-xl">15% Off</h1>
        <h1 className="font-bold text-6xl text-white p-5 max-[800px]:text-5xl max-[700px]:text-4xl max-[500px]:text-2xl max-[200px]:text-lg">Ready to Gift Others</h1>
        <Link href={"/products"} className="font-bold text-3xl text-white bg-blue-900 h-fit w-fit mx-5 px-2 py-1 rounded-xl hover:bg-blue-600 max-[700px]:mx-0 max-[500px]:text-xl max-[200px]:text-sm max-[200px]:px-2 max-[200px]:py-1" >Shop Now </Link>
      </div>
      
      <div className="w-[50%] flex justify-center items-center max-[900px]:w-full max-[900px]:mt-6 max-[700px]:mt-4 max-[500px]:mt-2">
        <Advertisement />
      </div>
    </div>
  )
}

export default SaleCard
