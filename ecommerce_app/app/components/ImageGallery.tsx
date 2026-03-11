"use client";


import Image from "next/image";
import { useState } from "react";

export default function ProductClient({ params } : {params : {productImages : string[]}}) {

    const productImages = params.productImages;
  const [activeImage, setActiveImage] = useState(productImages[0]);

  return (
    <div className="w-110 flex flex-col justify-center gap-2">
      
      <Image src={activeImage} width={400} height={200} alt="product-image" className="w-110 h-auto bg-gray-200 rounded-2xl border-2 border-gray-600 object-cover" />


        {
            productImages.length < 1 ? (
                <div className="hidden w-110 h-fit overflow-hidden justify-around">
                <Image
                    src={productImages[0]}
                    width={80}
                    height={80}
                    onClick={() => setActiveImage(productImages[0])}
                    alt="product-image"
                    className="w-fit h-auto place-self-center bg-gray-400 cursor-pointer border-2 border-gray-900 rounded-xl  "
                />
                </div>
            )
            : (
                <div className="flex w-110 h-fit flex-wrap overflow-hidden justify-around">
                {productImages.map((img, i) => (
                    <Image
                        key={i}
                        src={img}
                        width={60}
                        height={80}
                        onClick={() => {setActiveImage(img)}}
                        alt="product-image"
                        className="w-fit h-auto place-self-center bg-gray-400 cursor-pointer border-2 border-gray-900 rounded-xl  "
                    />
                ))}
                </div>
            )
        }
    </div>
  );
}