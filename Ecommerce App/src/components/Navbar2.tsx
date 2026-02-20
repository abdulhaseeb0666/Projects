import { categories } from "../assets/Menu";

const Navbar2 = () => {

  return (
    <div className="h-10 px-5 bg-orange-500 text-white text-sm flex items-center justify-between">
        
        {categories.map((category) => (
          <li className="relative group text-center font-bold cursor-pointer list-none hover:text-gray-700">
            <span>{category.main}</span>
            <ul className="w-fit whitespace-nowrap absolute bg-gray-600 opacity-0 invisible top-full left-0 flex gap-2 rounded-xl shadow-amber-900 p-3 flex-col group-hover:opacity-100 group-hover:visible  ">
              {category.sub.map((subItem) => (
              <li className="text-center font-bold cursor-pointer list-none text-white hover:text-blue-400">{subItem}</li>
              ))}
            </ul>
          </li>
        ))
        }
    
    </div>
  )

}

export default Navbar2
