import  {React, useState, useEffect} from 'react'
import axios from "axios";
import {Link} from "react-router-dom"
import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Ix6MXDhSyK2k5ddZxfXQGR3UprqoTnAewpFFfoCtMf6Zm5nFtpI4TgZmd994naMvDbPHWZcyjap6nzFjWqtNVbY001eiOdu9C');

const handleClick = async (event) => {
  // Get Stripe.js instance
  const stripe = await stripePromise;

  // Call your backend to create the Checkout Session
 const response = await axios.post("http://localhost:4242/create-checkout-session")
  //{ method: 'POST' });

  const session = response.data.id

  // When the customer clicks on the button, redirect them to Checkout.
  const result = await stripe.redirectToCheckout({
    sessionId: session,
  });

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
        
       
    
         }
         
         fetchBookingID();
         
        
        },  [])
      

return (
  
       
      <> 
      
 <Link to = "./MyBookings">
  <button className="py-3 mt-10 ml-10 text-white uppercase bg-gray-400 rounded-md font-small w-sm focus:outline-none hover:bg-gray-400 hover:shadow-none" type="submit">Go to my bookings </button>
  </Link>
      
<div className="grid w-auto gap-1 grid-row-1 place-items-center">

<div className="px-24 py-24 my-24 rounded-lg shadow-lg ">
  <h1 className = "mb-4 text-2xl text-center">Invoice:</h1>
  <h3 className = "mb-4 text-center text-1xl"><strong>Name:</strong> {bookings.name} </h3>

  <h3 className = "mb-4 text-center text-1xl"><strong>Phone:</strong>  {bookings.phonenumber} </h3>
 
</div>
<div className="px-20 py-20 my-12 rounded-lg shadow-lg">
  <h1 className = "mb-8 text-2xl text-center">Order:</h1>

  <h3 className = "mb-4 text-center text-1xl"><strong>Name:</strong>  {products.name} </h3>
  <h3 className = "mb-4 text-center text-1xl"><strong>Description:</strong>  {products.description} </h3>
  <h3 className = "mb-4 text-center text-1xl"><strong>Price:</strong>  {products.price} </h3>
  
  </div>
  <button role="link" onClick={handleClick}>PAY NOW</button>
  </div>

 
  
   


  
 
  
        </>
    )

}

export default Checkout;
