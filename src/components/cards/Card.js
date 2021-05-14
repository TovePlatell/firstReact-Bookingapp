import React, {useState} from "react";
import ConfirmBooking from "../booking/ConfirmBooking"
import {getUser} from "../utils/user"
import {Link} from "react-router-dom"
//import CardList from "./CardList";

//import axios from "react-dom"


function Card({ productName, description, location, price, image }) {
  
  const [bookClicked, setBookClicked] = React.useState(false)

  
  return (

<>

 <div className="py-6 mx-6">
  <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
    
        {!bookClicked &&
        
        <>
        
        <div className="w-1/3 bg-cover">
        <img src= {"http://localhost:1337" + image} alt="some pic from database"/>
        </div>
        
          <div className="w-2/3 p-4">
          <h2 className="text-gray-900">{productName}</h2>
               <p className="mt-2 text-sm text-gray-600">{description}</p>
                <p className="mt-2 text-sm text-gray-600">{location}</p>
            <div className="flex mt-2 item-center">
            <svg className="w-5 h-5 text-gray-700 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
            </svg>
            <svg className="w-5 h-5 text-gray-700 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
            </svg>
            <svg className="w-5 h-5 text-gray-700 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
            </svg>
            <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
            </svg>
            <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
            </svg>   
          </div>
            
          <div className="flex justify-between mt-3 item-center">
              <h1 className="text-xl font-bold text-gray-700">{price}</h1>
        
          {getUser().length === 0 ?
          
          <div className="font-serif text-xs"> <Link to="./LoginForm">Login to book this</Link></div>
          
           :
           
           <div className="">
           <Link to = "./ConfirmBooking">
                {bookClicked && <ConfirmBooking price={price}/>}
                <button onClick={() => {setBookClicked(true)} } className="px-3 py-2 m-4 my-2 font-bold text-white uppercase bg-gray-800 rounded mtext-xs">Book</button>
             </Link>
          </div>
  
          }
          </div>
        </div>
        
        </>  }

       
  
        
     </div>
</div>
      
</>

      )
}

export default Card;

