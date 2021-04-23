import React from 'react'
import {Link} from "react-router-dom"




// detta är en card mall 
//parent till cardlist


function card({image, officeName, location, price, button}) {
    return (
        <div className="relative bg-white">
            
       
       
           <img src={image} alt="" />
           <div classname="text-4xl font-bold text-blue-100"> {officeName} </div> 
            <div>   {location} </div>
            <div>   {price} </div>
           <Link to = "/LoginForm">
           <button className="px-4 py-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow hover:bg-gray-100"> {button}
           </button> 
           </Link>
 

     
        </div>
    )
}

export default card;