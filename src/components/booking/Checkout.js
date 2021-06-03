import  {React, useState, useEffect} from 'react'
import axios from "axios";
import {Link} from "react-router-dom"
import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Ix6MXDhSyK2k5ddZxfXQGR3UprqoTnAewpFFfoCtMf6Zm5nFtpI4TgZmd994naMvDbPHWZcyjap6nzFjWqtNVbY001eiOdu9C');

const handleClick = async (event) => {

event.preventDefault();
console.log("hejhej")


  // Get Stripe.js instance
  const stripe = await stripePromise;

  // Call your backend to create the Checkout Session
 const response = await axios.post("https://bookingtove.herokuapp.com/create-checkout-session")
  //{ method: 'POST' });

  const session = response.data.id

  // When the customer clicks on the button, redirect them to Checkout.
  const result = await stripe.redirectToCheckout({
    sessionId: session,
  });

  //hejhej

  if (result.error) {
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `result.error.message`.
  }
};





function Checkout() {

    const [bookings, setBookings] = useState([]);
    const [products, setProducts] = useState([]);
    
    

    useEffect (()=>{
        const fetchBookingID=async()=> {
        
        const response = await axios.get(`https://bookingtove.herokuapp.com/bookings/${localStorage.getItem("BookingID")}`  );
        
        
        

       setBookings(response.data)
       setProducts(response.data.product)

       console.log("produkter",response.data)
       console.log(event)
        
       
    
         }
         
         fetchBookingID();
         
        
        },  [])
      

return (
  
       
      <> 
      
 <Link to = "./MyBookings">
  <button className="py-3 mt-10 ml-10 text-black rounded-md font-xs w-sm focus:outline-none " type="submit">Go to my bookings </button>
  </Link>
      
<div className="container flex h-full max-w-md mx-auto mt-6 mb-6 overflow-hidden bg-white rounded-lg shadow xl:max-w-3xl">



<div className="w-full p-8 xl:w-1/2">
             
             <form action="">


  <h1 className = "text-2xl font-bold">Invoice:</h1>
  <h3 className = "block mb-2 text-sm font-semibold text-gray-700"><strong>Name:</strong> {bookings.name} </h3>
  <h3 className = "block mb-2 text-sm font-semibold text-gray-700"><strong>Phone:</strong>  {bookings.phonenumber} </h3>
 


  <h1 className = "mt-10 text-2xl font-bold">Order:</h1>

  <h3 className = "block mb-2 text-sm font-semibold text-gray-700"><strong>Name:</strong>  {products.name} </h3>
  <h3 className = "block mb-2 text-sm font-semibold text-gray-700"><strong>Description:</strong>  {products.description} </h3>
  <h3 className = "block mb-2 text-sm font-semibold text-gray-700"><strong>Price:</strong>  {products.price} </h3>
  
 
  
  
  <button className="py-3 mt-10 text-white uppercase bg-gray-400 rounded-md ml-36 font-small w-sm focus:outline-none hover:bg-gray-400 hover:shadow-none" role="link" onClick={handleClick}>PAY NOW</button>

 
      </form>
    </div>
</div>


  
 
  
        </>
    )

}

export default Checkout;
