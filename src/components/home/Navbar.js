import { Link} from "react-router-dom";
import React, {useCallback, useState} from "react";
import {getUser} from "../utils/user"



function Navbar(){
  const [, updateState] = useState()
  const forceUpdate = useCallback(() => updateState({}), [])

  return(

<>

    <div className="flex flex-row px-2 mx-auto text-sm bg-gray-100 bg-greycontainer md:px-20">
    <Link to ="./">
                 
                 <img src="./logo.png" alt="logo" className="w-16 rounded-full mr-15 md:mr-0"/>
                 </Link>
                 
    <div className="flex py-2 overflow-y-hidden whitespace-no-wrap justifyoverflow-x-auto">
 
           
    
            <Link to ="./CardList" className="px-3 py-8">Our offices
            </Link>

          
          

            {getUser().length === 0 &&
              
              <Link to="./LoginForm" className="px-3 py-8">Login
            </Link> }


          
            {getUser().length !== 0   &&
            
            <>

          
              
              
            <Link to ="./MyBookings" className="px-3 py-8"> My Bookings 
            </Link>
            <Link to ="./AddProduct" className="px-3 py-8">Add products
            </Link>
              <Link to="./LoginForm" className="px-3 py-8" onClick={() => {
                localStorage.removeItem("jwt")
                forceUpdate()
                }
                }>Logout
            </Link>
            </>
            }
            

        
            <Link to="./contact" className="px-3 py-8"> Contact us</Link>
        </div>
        
       
    </div>

    
</>


)
}



export default Navbar