import { defineConfig } from 'vite';
const page = () => {
  return (
    <div className="p-10">
        <h1 className="font-extrabold text-3xl">Contact Us</h1>
        <p className="text-xl my-5">Our dedicated team is here to provide swift assistance. Feel free to reach out to us for any questions, comments or inquiries. We are here to help.</p>
        <h1 className="font-bold text-xl">We are happy to hear from you and help you.</h1>
        <div className='flex-col gap-10'>
          <h1 className="font-md text-blue-500 font-semibold text-md ">Visit Us At</h1>
          <h1 className="font-md text-blue-500 font-semibold text-md ">Support and Sales</h1>
          <h1 className="font-md text-blue-500 font-semibold text-md">Email</h1>
        </div>
    </div>
  )
}

export default page
