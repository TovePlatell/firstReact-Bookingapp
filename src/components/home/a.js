import emailjs from "emailjs-com";
import React, {useState} from "react"

export default function ContactUs() {

  const [message, setMessage]= useState("")
    
  function sendEmail(e) {

    e.preventDefault();

    emailjs.sendForm('service_urnpofs', 'template_pkezald', e.target, 'user_Xp6b8Hn86oMSTRiFJ2Vqh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()

      setMessage("Email has been sent")
  }

  return (
      
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="grid mx-2 my-20 place-items-center sm:my-auto">
        <div className="w-11/12 p-12 px-6 py-10 bg-white rounded-lg shadow-md sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 sm:px-10 sm:py-6 lg:shadow-lg">

        <h1 className="pt-3 pb-6 text-green-600 ml-52">{message}</h1>
        <h2 className="text-3xl font-semibold text-center text-gray-800 lg:text-4xl">
          Contact us
          </h2>
      <form className="mt-10" onSubmit={sendEmail}>
      <label className="block text-xs font-semibold text-gray-600 uppercase">
            Name:
            </label>

            <input
              type="text"
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              placeholder="Name"
              name="name"
            />
    

        <label className="block text-xs font-semibold text-gray-600 uppercase">
            Email:
            </label>

            <input
              type="email"
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              placeholder="Email adress"
              name="email"
            />
       

       <label className="block text-xs font-semibold text-gray-600 uppercase">
            Subject:
            </label>

            <input
              type="text"
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              placeholder="subject"
              name="subject"
            />
        

        <label className="block text-xs font-semibold text-gray-600 uppercase">
            Enter your message here:
            </label>

            <textarea
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              id=""
              cols="30"
              rows="10"
              placeholder="Your message"
              name="message"
            ></textarea>
     

        
            <input
              type="submit"
              className="w-full py-3 mt-10 font-medium text-white uppercase bg-gray-800 rounded-sm focus:outline-none hover:bg-gray-700 hover:shadow-none"
              value="send message"
            />
        
        </form>
            </div>
           </div>
           </div>
       
   
  
  );
}
