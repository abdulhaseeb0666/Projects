"use client";

const ContactForm = () => {
    return (
        <form className="h-fit bg-[#f3e8ca] p-5 rounded-2xl border-2 border-black flex flex-col gap-2 ">
            <h1>Fill out the form and a member from our sales team will reach out to you as soon as possible </h1>
            <div className="flex gap-3 ">
                <div>
                    <h1 className={"font-bold text-sm"}>First Name: </h1>
                    <input type="text" name="firstname" id="" placeholder="Enter First Name" className="w-full border-2 border-black" />
                </div>
                <div>
                    <h1 className={"font-bold text-sm"}>Last Name: </h1>
                    <input type="text" name="lastname" id="" placeholder="Enter Last Name" className="w-full border-2 border-black" />
                </div>
            </div>
            <h1 className={"font-bold text-sm"}>Email: </h1>
            <input type="email" name="email" id="" placeholder="Enter Email" className="w-full border-2 border-black" />
            <h1 className={"font-bold text-sm"}>Phone No: </h1>
            <input type="number" name="lastname" id="" placeholder="Enter Phone No" className="w-full border-2 border-black" />
            <h1 className={"font-bold text-sm"}>Message: </h1>
            <textarea name="message" id="" placeholder="Enter Message" className="w-full border-2 border-black"></textarea>
            <button 
                type="submit" 
                className="w-fit bg-black text-white px-2 rounded-md font-bold cursor-pointer text-xl place-self-center hover:scale-110 "
                onSubmit={(e)=>{
                    e.preventDefault();
                }}    
            >Submit</button>
        </form>
    )
}

export default ContactForm
