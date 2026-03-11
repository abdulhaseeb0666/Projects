import Image from "next/image"

const Advertisement = () => {
  return (
    <div className="w-75 overflow-hidden mx-auto max-[900px]:w-65 max-[700px]:w-55 max-[500px]:w-45 max-[200px]:w-30 ">
        <div className="flex animate-slider">
            <Image
            src="https://assets.stickpng.com/thumbs/5eb1560074bb7d0004ae61b3.png"
            width={300}
            height={300}
            alt="Advertisement"
            className="min-w-full object-contain max-[900px]:h-65 max-[700px]:h-55 max-[500px]:h-45 max-[200px]:h-30"
            />
            <Image
            src="https://assets.stickpng.com/thumbs/5c62c1c7e4b8dd029ff25b18.png"
            width={300}
            height={300}
            alt="Advertisement"
            className="min-w-full object-contain max-[900px]:h-65 max-[700px]:h-55 max-[500px]:h-45 max-[200px]:h-3 "
            />
            <Image
            src="https://assets.stickpng.com/categories/4974.png"
            width={300}
            height={300}
            alt="Advertisement"
            className="min-w-full object-contain max-[900px]:h-65 max-[700px]:h-55 max-[500px]:h-45 max-[200px]:h-3"
            />
            <Image
            src="https://assets.stickpng.com/categories/1466.png"
            width={300}
            height={300}
            alt="Advertisement"
            className="min-w-full object-contain max-[900px]:h-65 max-[700px]:h-55 max-[500px]:h-45 max-[200px]:h-3"
            />
        </div>
    </div>
  )
}

export default Advertisement
