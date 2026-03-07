import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-gray-900 w-full h-fit flex text-white font-bold items-center justify-between py-2 px-4">
        <div className="flex items-center gap-10">
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfOTbSSEiEXBDYndLMpKOO0EQFZGYDChWE0w&s" alt="logo" width={70} height={70} loading="eager" className="rounded-full" />
            <h1 className="font-bold text-3xl">My Web App</h1>
        </div>

        <ul className="flex gap-10 text-2xl">
            <Link className="hover:text-gray-400" href={"/"}>Home</Link>
            <Link className="hover:text-gray-400" href={"/products"}>Products</Link>
            <Link className="hover:text-gray-400" href={"/about"}>About</Link>
            <Link className="hover:text-gray-400" href={"/contact"}>Contact</Link>
        </ul>
    </nav>
  )
}

export default Navbar
