import { Link, useHistory } from "react-router-dom";
import React, {useCallback, useState, useEffect} from "react";

import {getUser} from "../utils/user"

// göra en dropdown menu om jag hinner


function Navbar(){
  const [, updateState] = useState()
  const forceUpdate = useCallback(() => updateState({}), [])


  
  return(

<>

    <div className="px-2 mx-auto bg-gray-200 bg-greycontainer md:px-20">
    <div className="flex justify-between py-2 overflow-x-auto overflow-y-hidden whitespace-no-wrap">
    
     <img src="./logo.png" alt="logo" className="h-12 mr-12 rounded-full w-25 md:mr-0"/>
           
        
          <div className="flex">
            <div className="px-3 py-3">
                <Link to ="./">
                    Home
                </Link>
            </div>
        
            

            <Link to ="./CardList" className="px-3 py-3">Our spaces
            </Link>

          
            

            {getUser().length === 0 &&
              
              <Link to="./LoginForm" className="px-3 py-3">Login
            </Link>}


          
            {getUser().length !== 0 &&
            <>
            <Link to ="./userPage" className="px-3 py-3"><a href="/blogs">My Bookings</a>
            </Link>
            <Link to ="./AddProduct" className="px-3 py-3">Add products
            </Link>
              <Link to="./LoginForm" className="px-3 py-3" onClick={() => {
                localStorage.removeItem("jwt")
                forceUpdate()
                }
                }>Logout
            </Link>
            </>
            }
            

        
            <Link to="./contact" className="py-3 pl-3"><a href="/about-me-bedram-tamang" class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full font-hairline">Contact us</a></Link>
        </div>
    </div>
</div>

</>


)
}

export default Navbar