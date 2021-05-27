import { React, useState, useEffect } from "react";
import axios from "axios";
import "./booking.css"

function MyBookings() {
    
  const [myBooking, setMyBookings] = useState([]);

  useEffect(() => {
    const fetchMyBookings = async () => {
      const userId = localStorage.getItem("id");

      const res = await axios.get(
          
        `https://bookingtove.herokuapp.com/bookings?_where[users_permissions_user]=${userId}`
      );

      //console.log(res.data);
      //console.log(res.data.product);

      setMyBookings(res.data);
      
    };

    fetchMyBookings();
  }, []);

  const handleDelete = (e) => {
    
      const {value} = e.target;
      
      axios.delete(`https://bookingtove.herokuapp.com/bookings/${value}`)
  
  }

  return (
    <>

  

    <p className="text-lg font-bold text-center text-grey">Your bookings</p>
    
      {myBooking.map((booking) => {
        return (
          <div key={booking.id}>

          
          <div className="container flex h-full max-w-md mx-auto mt-6 mb-6 overflow-hidden bg-white rounded-lg shadow xl:max-w-3xl">

          <div className="relative hidden h-full xl:block xl:w-1/2">
    <img
      className="absolute object-cover w-full h-auto"
      src="https://images.unsplash.com/photo-1541233349642-6e425fe6190e"
      alt="my zomato"
    />
  </div>
          
              <div className="w-full p-8 xl:w-1/2">
             
                    <form action="">
              
                    <h1 className="text-2xl font-bold">Invoice:</h1>
                    
                    <p className="block mb-2 text-sm font-semibold text-gray-700">
                      <strong>Name:</strong> {booking.name}{" "}
                    </p>

                    <h1 className="text-2xl font-bold">Order:</h1>

                     <p className="block mb-2 text-sm font-semibold text-gray-700">
                     <strong>Name:</strong> {booking.product.name}{" "} 
                    </p>
                    <p className="block mb-2 text-sm font-semibold text-gray-700">
                      <strong>Description:</strong>{" "}
                      {booking.product.description}{" "}
                    </p>
                    <p className="block mb-2 text-sm font-semibold text-gray-700">
                      <strong>Price:</strong> {booking.product.price} <span>SEK</span>{" "}
                      
                    </p> 

                    <p className="block mb-2 text-sm font-semibold text-gray-700">
                      <strong>Date:</strong> 
                      
                    </p> 


                    <button value={booking.id} onClick={handleDelete} className="px-3 py-2 mt-6 text-xs bg-gray-300 rounded text-grey font-xs"> Cancel this booking</button>

                    </form>
                  </div>
                </div>
              </div>
             
        );
      })}
      
    </>
  );
}

export default MyBookings;
