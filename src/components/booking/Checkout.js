import  {React, useState, useEffect} from 'react'
import axios from "axios";
import {Link} from "react-router-dom"





function Checkout() {

    const [bookings, setBookings] = useState([]);
    const [products, setProducts] = useState([]);
    
    

    useEffect (()=>{
        const fetchBookingID=async()=> {
        
        const response = await axios.get(`http://localhost:1337/bookings/${localStorage.getItem("BookingID")}`  );
        
        
        

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
  </div>
  
   


  
 
  
        </>
    )

}

export default Checkout;
