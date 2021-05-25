// import Loginform from "./LoginForm"
//import axios from "axios"
//import CardList from "../cards/CardList"
//import {getUser} from "../utils/user"


// skapa en funktion som kollar om du är inloggad... om du är det visas nedan form annars skickas till loginform..
// produkten ska följa med på vad som har bokats

export default function confirmBooking({info}){

  
    return(
      
<>

<div className="flex flex-col h-screen bg-gray-100">
      <div className="grid mx-2 my-20 place-items-center sm:my-auto">
  <form className="max-w-xl p-10 m-4 bg-white rounded shadow-xl">
    <p className="font-medium text-center text-gray-800 ">Customer information</p>
    <div className="">
      <label className="block text-sm text-gray-00" >Name</label>
      <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"  type="text" required="" placeholder="Your Name" aria-label="Name" />
    </div>
    <div className="mt-2">
      <label className="block text-sm text-gray-600" >Email</label>
      <input className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded" value="" type="text" required="" placeholder="Your Email" aria-label="Email" />
    </div>
    <div className = "mt-2">
      <label className="block text-sm text-gray-600">Address</label>
      <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" required="" placeholder="Street" aria-label="Email" />
    </div>
    <div className="mt-2">
      <label className="hidden block text-sm text-gray-600" >City</label>
      <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"  type="text" required="" placeholder="City" aria-label="Email" />
    </div>
    <div className="inline-block w-1/2 pr-1 mt-2">
      <label className="hidden block text-sm text-gray-600" >Country</label>
      <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" required="" placeholder="Country" aria-label="Email" />
    </div>
    <div className="inline-block w-1/2 pl-1 mt-2 -mx-1">
      <label className="hidden block text-sm text-gray-600" >Zip</label>
      <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" required="" placeholder="Zip" aria-label="Email" />
    </div>
    <p className="mt-4 font-medium text-gray-800">Payment information</p>
    <div className="">
      <label className="block text-sm text-gray-600" >Card</label>
      <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" required="" placeholder="Card Number MM/YY CVC" aria-label="Name" />
    </div>
    <div className="mt-4">
  
      <button className="px-4 py-1 font-light tracking-wider text-white bg-gray-900 rounded" type="submit" value="">{info} SEK </button> 
    </div>
    
   
  </form>
  </div>

  
</div>



</>

    )
}