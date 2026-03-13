"use client";

import { useSearchParams } from "next/navigation";
import {  useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type CartItem = {
  id: string | null;
  name: string | null;
  description: string | null;
  price: number;
  quantity: number;
  image: string;
};

const CartClient = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const id = searchParams.get("id");
  const name = searchParams.get("title");
  const description = searchParams.get("description");
  const price = searchParams.get("price");
  const quantity = Number(searchParams.get("quantity")) || 1;
  const image = searchParams.get("image");
  
  const [cart, setCart] = useState<CartItem[]>([]);
  
  function removeItem(e : string | null) {
    const updatedCart = cart.filter(p => p.id !== e);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  }

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
  if (id || name || description || price) {

    const storedCart = localStorage.getItem("cart");
    const currentCart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];

    const newItem: CartItem = {
      id,
      name,
      description,
      price: Number(price),
      quantity: Number(quantity),
      image: image ?? "",
    };

    const existing = currentCart.find(p => p.id === id);
    console.log(existing);


    let updatedCart;

    if (existing) {
      updatedCart = currentCart.map(p =>
        p.id === id
          ? { ...p, quantity: p.quantity + 1 }
          : p
      );
    } else {
      updatedCart = [...currentCart, newItem];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);

    router.replace("/cart");
  }
}, [id, name, description, price, quantity, image, router]);
  
  return (
    <div className="p-5">
        <h1 className="text-2xl font-bold mb-5">Cart</h1>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item , index) => (
          <div key={index} className="border-2 border-gray-800 rounded-2xl p-3 mb-3 flex gap-3">
            <Image src={item.image} width={80} height={30} loading="eager" alt="product-image" className="w-auto h-auto bg-gray-200 rounded-2xl border-2 border-orange-500 object-cover" />
            <div className="flex flex-col h-30 justify-between">
              <h2 className="font-semibold text-xl">{item.name}</h2>
              <p className=" w-235" >{item.description}</p>
              <p><b>Quantity: </b>{item.quantity}</p>
              <p><b>Price: </b>${item.price.toFixed(0)}</p>
            </div>
            <button id={String(index)} onClick={()=>{removeItem(item.id)}} className="bg-red-500 h-fit w-fit place-self-end  text-white text-xl cursor-pointer active:scale-90 px-2 py-1 rounded-2xl border border-black">Remove</button>
          </div>
        ))
      )}
      {
        cart.length > 0 && (
          <div className="h-fit w-fit p-5 bg-gray-100 border-3 border-black rounded-2xl absolute left-[50%] translate-x-[-50%]">
            
            <div className="border-b-2 border-b-gray-400 pb-5">
            {
              cart.map((item , index) => (
                <div key={index} className="flex justify-between whitespace-nowrap text-xl font-bold gap-40">
                  <p>{item.name}</p>
                  <p>${item.price.toFixed(0)} x {item.quantity} <span className="text-gray-500 font-normal">=</span> ${Number(item.price.toFixed(0)) * item.quantity}</p>
                </div>
              ))
            }
            </div>

            <div className="font-bold text-xl flex justify-between">
              <h1>Total: </h1>
              <h1>${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(0)}</h1>
            </div>
            
            <button type="button" 
              onClick={()=>{
                router.push(`/checkout/?cart=${JSON.stringify(cart)}`)
                router.refresh();
                localStorage.removeItem("cart");
              }} 
              className="text-white font-bold w-full mt-3 bg-green-800 px-3 py-1 rounded-2xl border-2 cursor-pointer active:scale-90">Checkout</button>
          </div>   
        )  
      }
    </div>
  );
};

export default CartClient;