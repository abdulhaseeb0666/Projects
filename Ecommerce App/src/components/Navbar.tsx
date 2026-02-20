import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="h-25 flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex align-center items-center gap-5">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPE9VD7hC5m5iUcMPpHnJWJj37QdoVWgzLsg&s" alt="Logo" className="h-20 w-20 bg-gray-800 rounded-full " />
          <h1 className="text-2xl font-bold justify-self-start-start ">Ecommerce App Project</h1>
        </div>
        <div className="flex space-x-4 gap-5">
            <Link to="/" className="hover:text-gray-400 font-bold">Home</Link>
            <Link to="/products" className="hover:text-gray-400 font-bold">Products</Link>
            <Link to="/contact" className="hover:text-gray-400 font-bold">Contact</Link>
            <Link to="/about-us" className="hover:text-gray-400 font-bold">About Us</Link>
        </div>
    </div>
  )
}

export default Navbar
