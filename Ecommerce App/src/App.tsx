import {Routes, Route, } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Products from "./pages/Products"
import NotFound from "./pages/Not Found"

const App = () => {
  return (
    <div>
      <Navbar /> 
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<About />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
