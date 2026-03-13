import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav id="navbar" className="bg-gray-900 h-fit flex text-white font-bold items-center justify-between py-2 px-4 max-[800px]:flex-col max-[800px]:gap-4">
        <div className="flex items-center gap-10 max-[700px]:flex-col max-[700px]:gap-3">
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfOTbSSEiEXBDYndLMpKOO0EQFZGYDChWE0w&s" alt="logo" width={70} height={70} loading="eager" className="rounded-full max-[500px]:w-12 max-[500px]:h-12 max-[200px]:w-8 max-[200px]:h-8" />
            <h1 className="font-bold text-3xl max-[900px]:text-2xl max-[500px]:text-xl max-[200px]:text-base"><Link href={"/"}>CartNova</Link></h1>
        </div>

        <ul className="flex gap-10 text-2xl max-[900px]:text-xl max-[800px]:flex-wrap max-[700px]:flex-col max-[700px]:gap-4 max-[500px]:text-lg max-[200px]:text-sm">
            <Link className="hover:text-gray-400" href={"/"}>Home</Link>
            <Link className="hover:text-gray-400" href={"/products"}>Products</Link>
            <Link className="hover:text-gray-400" href={"/cart"}>Cart</Link>
            <Link className="hover:text-gray-400" href={"/about"}>About</Link>
            <Link className="hover:text-gray-400" href={"/contact"}>Contact</Link>
        </ul>
    </nav>
  )
}

export default Navbar
