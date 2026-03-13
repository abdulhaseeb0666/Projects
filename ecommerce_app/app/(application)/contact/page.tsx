import ContactForm from "../../components/ContactForm";
import type { Metadata } from "next";

export const metadata : Metadata = {
  title: "Contact",
  description: "Contact Page for CartNova",
}


const page = () => {
  return (
    <div className="p-10">
        <h1 className="font-extrabold text-3xl">Contact Us</h1>
        <p className="text-xl my-5">Our dedicated team is here to provide swift assistance. Feel free to reach out to us for any questions, comments or inquiries. We are here to help.</p>
        
        <div className="flex justify-center items-center m-10 max-[1000px]:flex-col max-[1000px]:gap-5">
          
          <div className="w-[60%] max-[1000px]:w-full">
            <h1 className="font-bold text-xl">We are happy to hear from you and help you.</h1>
            <div className='flex flex-col gap-3 mt-5' >
              <h1 className="font-md text-blue-500 font-semibold text-md ">Visit Us At</h1>
              <p>7428 Maple Ridge Drive, Apt 3B, Denver, CO 80219, United States</p>
              <h1 className="font-md text-blue-500 font-semibold text-md ">Support and Sales</h1>
              <p>+1 (123) 456-7890</p>
              <h1 className="font-md text-blue-500 font-semibold text-md">Email</h1>
              <p>q7C5o@random.com</p>
            </div>
          </div>
          
          <div className="w-[40%] max-[1000px]:w-full">
            <ContactForm />
          </div>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1288.0735146601114!2d71.50120319405737!3d30.177893230033767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b370020d10117%3A0x45693c8dfb93beae!2sAbdullah%20Gujjar%20Drink%20Corner!5e0!3m2!1sen!2s!4v1773085884957!5m2!1sen!2s" loading="lazy" className="w-full h-100 mt-5 rounded-2xl border-2 border-black"></iframe>

    </div>
  )
}

export default page
