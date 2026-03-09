import Image from "next/image"
const page = () => {
  return (
    <div>
        <div className="bg-red-700 text-white m-5 p-5 rounded-2xl flex h-fit">
            <div className="flex flex-col gap-3 w-[60%]">
                <h1 className={"font-bold text-3xl text-center"}>About Our Store</h1>
                <p className="text-white">
                    Behind every great store is a purpose. Ours was built on the belief that customers deserve better — better service, better quality, and better value. <br />
                    We recognized a common frustration in online shopping: inconsistent product quality, delayed deliveries, and poor customer support. Instead of accepting that as the norm, we decided to create an alternative — a store where customer satisfaction is not an afterthought, but the foundation. <br /> <br />
                    <b>We focus on:</b> <br />
                    <ol className="list-decimal list-inside">
                        <li>Curating high-quality products</li>
                        <li>Maintaining transparent pricing</li>
                        <li>Providing responsive customer support</li>
                        <li>Ensuring secure payment systems</li>
                    </ol> <br />
                    Our journey is driven by innovation, customer feedback, and a constant commitment to improvement. We don’t just follow trends — we refine processes to ensure you receive exactly what you expect.
                </p>
            </div>
            <div className="w-[40%] flex justify-end" >
                <Image src="https://plus.unsplash.com/premium_vector-1727363567898-6a3352c8f1fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RWNvbW1lcmNlJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D" alt="about" width={300} height={300} className="w-[90%] h-auto object-cover rounded-2xl " />
            </div>
        </div>
        <div className="bg-pink-700 text-white m-5 p-5 rounded-2xl flex h-fit">
            <div className="w-[40%] flex justify-start" >
                <Image src="https://images.unsplash.com/vector-1761241899087-9abc37a13b8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D" alt="about" width={300} height={300} className="w-[90%] h-auto object-cover rounded-2xl " />
            </div>
            <div className="flex flex-col gap-3 w-[60%]">
                <h1 className={"font-bold text-3xl text-center"}>Our Story</h1>
                <p className="text-white">
                    We started with a simple idea: online shopping should be easy, transparent, and reliable. What began as a small curated collection has grown into a customer-focused eCommerce platform built on trust and quality. <br /> <br />
                    From day one, our mission has been to remove the friction from online shopping — no hidden costs, no confusing policies, no compromises on product quality. Every product we offer is carefully selected, reviewed, and tested to ensure it meets our standards before it reaches your doorstep. <br /> <br />
                    As our community grew, so did our responsibility. Today, we proudly serve customers nationwide, continuously improving our logistics, support systems, and product catalog to deliver a seamless experience from browsing to checkout.
                    Our story is not just about selling products — it&apos;s about building long-term relationships with customers who value quality, convenience, and reliability.
                </p>
            </div>
        </div>
        <div className="bg-[#0b2f84] text-white m-5 p-5 rounded-2xl flex h-fit">
            <div className="flex flex-col gap-3 w-[60%]">
                <h1 className={"font-bold text-3xl text-center"}>Who We Are</h1>
                <p className="text-white">
                    We are a team of dedicated professionals passionate about commerce, technology, and customer experience.
                    <br /><br />
                    <b>Our expertise spans:</b> <br />
                    <ol className="list-decimal list-inside">
                        <li>Product sourcing & quality control</li>
                        <li>Logistics & fulfillment</li>
                        <li>Customer support operations</li>
                        <li>Digital experience optimization</li>
                    </ol>
                    <br />
                    
                    But more importantly, we are problem-solvers. Every feature on our website, every policy we implement, and every service we offer is designed with one goal in mind — making your shopping experience smooth, secure, and satisfying.
                    <br /><br />
                    <b>We believe in:</b> <br />
                    <ol className="list-decimal list-inside">
                        <li>Integrity in business</li>
                        <li>Customer-first decision making</li>
                        <li>Continuous innovation</li>
                        <li>Long-term trust over short-term profit</li>
                    </ol>
                    <br />
                    We are more than an online store — we are a brand committed to excellence at every step.
                </p>
            </div>
            <div className="w-[40%] flex justify-end" >
                <Image src="https://plus.unsplash.com/premium_vector-1726620999876-069a0ad16427?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob3BwaW5nfGVufDB8fDB8fHww" alt="about" width={300} height={300} className="w-[90%] h-auto object-cover rounded-2xl " />
            </div>
        </div>

        <div className="bg-orange-900  text-white m-5 p-5 rounded-2xl flex flex-row-reverse h-fit">
            <div className="flex flex-col gap-3 w-[60%] mx-auto">
                <h1 className="font-bold text-3xl text-center">
                    Why Choose Us
                </h1>

                <p className="text-white">
                    We focus on building trust and delivering a reliable shopping experience for every customer.
                    <br /><br />

                    <b>Here’s what makes us different:</b>
                    <br />

                    <ol className="list-decimal list-inside">
                    <li>Free returns with a simple and transparent process</li>
                    <li>Cash on Delivery (COD) available across Pakistan</li>
                    <li>100% authentic and verified brands</li>
                    <li>Positive feedback from satisfied customers</li>
                    </ol>

                    <br />

                    <b>What our customers say:</b>
                    <br />

                    <ol className="list-decimal list-inside">
                    <li>Fast delivery and secure packaging.</li>
                    <li>Very convenient with COD option.</li>
                    <li>Original products and great customer support.</li>
                    </ol>

                    <br />

                    Our goal is simple — to make your shopping experience smooth, secure, and stress-free every time you order from us.
                </p>
            </div>
            <div className="w-[40%] flex justify-start" >
                <Image src="https://plus.unsplash.com/premium_vector-1727444870031-fede62e79316?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob3BwaW5nfGVufDB8fDB8fHww" alt="about" width={300} height={300} className="w-[90%] h-auto object-cover rounded-2xl " />
            </div>
        </div>
    </div>
  )
}

export default page
