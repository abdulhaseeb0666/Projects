"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation"

type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

const Page = () => {
    const searchParams = useSearchParams();
    const cart: CartItem[] = JSON.parse(searchParams.get("cart") || "[]");
    console.log(cart)
  return (
    <div className="absolute h-fit w-fit rounded-2xl bg-gray-900 border-2 border-white p-5 top-[50%] left-[50%] translate-[-50%] text-white">
        <h1 className="font-bold text-2xl text-center text-gray-300 mb-3">Checkout</h1>
        <div >
            {
            cart.map((item: CartItem, index: number) => (
                <div key={index} className="flex justify-between whitespace-nowrap text-xl font-bold gap-40">
                <p>{item.name}</p>
                <p>${item.price.toFixed(0)} x {item.quantity} <span className="text-gray-500 font-normal">=</span> ${Number(item.price.toFixed(0)) * item.quantity}</p>
                </div>
            ))
            }
        </div>

        <div className="font-bold mt-5 border-t-2 border-t-gray-500 text-xl flex justify-between">
            <h1>Total: </h1>
            <h1>${cart.reduce((acc: number, item: CartItem) => acc + item.price * item.quantity, 0).toFixed(0)}</h1>
        </div>

        <h1 className="text-center mt-4">Thank you for your purchase. Your order will be processed soon</h1>
        <button className="bg-green-800 text-white font-bold px-2 rounded-2xl py-1 flex place-self-center mt-5 cursor-pointer hover:text-green-800 hover:bg-white active:scale-90">
          <Link href={"/"} replace>Go to Home</Link>
        </button>
    </div>
  )
}

export default Page
