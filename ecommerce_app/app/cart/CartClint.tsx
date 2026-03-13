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
      <div className="flex w-full mb-4 justify-between items-center">
        <h1 className="text-2xl font-bold">Cart</h1>
        <button type="button" className="cursor-pointer font-bold border-2 border-black  bg-red-900 text-white p-2 rounded-2xl">Update Cart</button>
      </div>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item , index) => (
          <div key={index} className="border-2 border-gray-800 rounded-2xl p-3 mb-3 flex gap-3 ">
            <Image src={item.image} width={80} height={30} loading="eager" alt="product-image" className="w-auto h-auto bg-gray-200 rounded-2xl border-2 border-orange-500 object-cover" />
            <div className="flex flex-col h-30 justify-between">
              <h2 className="font-semibold text-xl">{item.name}</h2>
              <p className=" w-fit" >{item.description}</p>
              <p><b>Quantity: </b>{item.quantity}</p>
              <p><b>Price: </b>${item.price.toFixed(0)}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartClient;