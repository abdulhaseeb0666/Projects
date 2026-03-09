import Image from "next/image"

const Advertisement = () => {
  return (
    <div className="w-75 overflow-hidden mx-auto ">
        <div className="flex animate-slider">
            <Image
            src="https://assets.stickpng.com/thumbs/5eb1560074bb7d0004ae61b3.png"
            width={300}
            height={300}
            alt="Advertisement"
            className="min-w-full object-contain"
            />
            <Image
            src="https://assets.stickpng.com/thumbs/5c62c1c7e4b8dd029ff25b18.png"
            width={300}
            height={300}
            alt="Advertisement"
            className="min-w-full object-contain"
            />
            <Image
            src="https://assets.stickpng.com/categories/4974.png"
            width={300}
            height={300}
            alt="Advertisement"
            className="min-w-full object-contain"
            />
            <Image
            src="https://assets.stickpng.com/categories/1466.png"
            width={300}
            height={300}
            alt="Advertisement"
            className="min-w-full object-contain"
            />
        </div>
    </div>
  )
}

export default Advertisement
