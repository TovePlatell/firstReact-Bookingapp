import React from "react";
import {NavLink} from "react-router-dom"

import ConfirmBooking from "./ConfirmBooking"
import Calendar from "./Calendar"
import "../App.css"

function Card({ productName, description, price, image }) {
  const [bookClicked, setBookClicked] = React.useState(false)

  return (

<>
 <div className="p-6 font-sans text-gray-900 bg-gray-200">
  <div className="container inline-block mx-auto">
    <div className="bg white">
      <div className="w-full p-4 sm:w-1/2 md:w-1/2 xl:w-1/4"> 
       
        {!bookClicked && 
        <>
        <div className="relative pb-18">
          <img className="imgCard" src={"http://localhost:1337" + image}
                alt="some from database" />
        </div>
        <div className="p-4">
        
          <h2 className="mt-2 mb-2 font-bold">Office 1</h2>
          <p className="text-sm">{description}.</p>
          <div className="flex items-center mt-3">
            <span className="text-sm font-semibold"></span>&nbsp;<span className="text-xl font-bold">{price}</span>&nbsp;<span className="text-sm font-semibold">SEK per month</span>
          </div>
        </div>
        <div className="p-4 text-xs text-gray-700 border-t border-b">
          <span className="flex items-center mb-1">
            <i className="mr-2 text-gray-900 far fa-clock fa-fw"></i> Location
          </span>
          <span className="flex items-center">
            <i className="mr-2 text-gray-900 far fa-address-card fa-fw"></i> Adress:
          </span>        
        </div>
        <div className="flex items-center p-4 text-sm text-gray-600"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-yellow-500 fill-current"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-yellow-500 fill-current"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-yellow-500 fill-current"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-yellow-500 fill-current"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400 fill-current"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><span className="ml-2">Rating</span></div>
        <Calendar/>
        
         <button onClick={() => {setBookClicked(true)}} className="px-3 py-2 m-4 my-2 font-bold text-white uppercase bg-gray-800 rounded mtext-xs">Book</button>

      
         </>}
       
      </div>

    </div>
  
    </div>
         {bookClicked && <ConfirmBooking price={price}/>}
</div>
   
</>
      )
}

export default Card;

     