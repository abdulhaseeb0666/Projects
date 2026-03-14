type Review = {
    comment : string;
    date : string;
    rating : number;
    reviewerEmail : string;
    reviewerName : string;
}

const ProductReview = async ({params} : {params : {reviews : Review[]}}) => {
    const reviews = (await params).reviews
  return (
    <div className="my-3 mx-2">
      <h1 className="text-3xl font-bold">Product Reviews</h1>
      <div className="flex flex-wrap w-full h-fit gap-2 m-2 max-[900px]:flex-col">
            {
                reviews.map(({comment , date , rating , reviewerEmail , reviewerName} : Review , index : number) => {
                    return(
                        <div className="bg-gray-100 w-[49%] p-3 rounded-2xl border-2 border-black max-[900px]:w-[95%]" key={index} >
                            <div className="flex justify-between items-center border-b-2 border-gray-300">
                                <h1 className="font-bold text-lg max-[900px]:text-md">{reviewerName}</h1>
                                <h1 className="text-sm text-gray-500 max-[900px]:text-xs">{reviewerEmail}</h1>
                            </div>
                            <h1 className="font-bold text-md m-3">{comment}</h1>
                            <h1 className="font-bold text-sm"><b>Rating: </b>{rating}</h1>
                            <h1 className="font-bold text-sm text-end text-gray-500">{date.slice(0,10)}</h1>
                        </div>
                    )
                })
            }
      </div>
    </div>
  )
}

export default ProductReview
