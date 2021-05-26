import React, {useState} from "react";

import {getUser} from "../utils/user"
import {Link} from "react-router-dom"

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"




//import CardList from "./CardList";

//import axios from "react-dom"
//import ConfirmModal from "../booking/Modal"


function Card({ productName, productId, description, location, price, image}) {
  const [bookClicked, setBookClicked] = React.useState(false)
  const [selectedDate, setSelectedDate ] = useState (new Date())
  const [endDate, setEndDate ] = useState (new Date())
  

  //const [userInfo, setUserInfo] = React.useState({initialValues})
  
  //const [userId, setUserId] = useState(null)

  /* useEffect(()=>{
        
    // läser data från localstorage
    const userId = localStorage.getItem("userId")
    //console.log(userId)
    //uppdaterar state
    setUserId(userId)

   }, []) */
   

  // const handleChange = ({target}) => {
  //   const {name, value} = target;
  //   setUserInfo({...userInfo, [name]:value})
  // } 

 

//   async function handleOnSubmit(e){
//     console.log(handleOnSubmit)
   
//     e.preventDefault();
   
//    const response = await axios.post("https://bookingtove.herokuapp.com/confirmbookings",  {
//         name:userInfo.name,
//        // email:userInfo.email,
//        // date:userInfo.date,
//         phonenumber:Number(userInfo.phonenumber)
//         //userId
//         //productId
        
//     })

//     console.log(response)
// }


   
  return (


   

<>


    
 <div className="container flex overflow-hidden rounded-lg shadow mx-mx-auto -w-md mx-h-full xl:max-w-3xl">
 
  
    
        <div className="relative hidden h-full xl:block xl:w-1/2">
        <img className="absolute object-cover w-full h-auto" src= {"https://bookingtove.herokuapp.com" + image} alt="some pic from database"/>
        </div>
        
        
          <div className="w-full p-8 xl:w-1/2">
          <form action="">
          
          
          
          <p className="block mb-2 text-sm font-semibold text-gray-700"><strong>What:</strong>
          {productName}</p>

               <p className="block mb-2 text-sm font-semibold text-gray-700">
               <strong>About:</strong>{description}</p>
               
               

              <DatePicker 
              selected={selectedDate} onChange={date => {setSelectedDate(date); console.log("AA", date)}}  placeholderText="choose a startdate"
                dateFormat="dd-MM-yyy"
                minDate={new Date()}
                startDate = {selectedDate}
                selectsStart
                isClearable
                showYearDropdown
                scrollableMonthYearDropdown
                className="border-4 border-double border-light-blue-500"/> 
              
         {/* <div>Selected={selectedDate ? selectedDate.toString() : null}</div>
          <div>Selected ={endDate ? endDate.toString() : null}</div> */}
              
              <DatePicker selected={endDate} onChange={date => setEndDate(date)}  placeholderText="choose an enddate"
                dateFormat="dd-MM-yyyy"
                selectsEnd
                startDate={selectedDate}
                minDate={selectedDate}
                endDate = {endDate}
                isClearable
                showYearDropdown
                scrollableMonthYearDropdown
                className="border-4 border-double border-light-blue-500"
              
              /> 
             
                        
          
              <p className="block mb-2 text-sm font-semibold text-gray-700"><strong>Located:</strong>{location}</p>
              
            {/* <div className="flex mt-3">
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
          </div> */}
            
        
              <p className="block mb-2 text-sm font-semibold text-gray-700"><strong>Price:</strong>{price}</p>
        
          {getUser().length === 0 ?
          
          <div className="text-sm font-semibold text-gray-700"> <Link to="./LoginForm">Login to book this</Link></div>
          
           :

           <Link to= {`/UserPage?name=${productName}&price=${price}&location=${location}&description=${description}&id=${productId}`}>
           <div className="">
                <button onClick={() => {setBookClicked(!bookClicked)} } className="text-sm text-gray-600 align-baseline pinline-block hover:text-gray-800">Book</button>
               
          </div>
          </Link>
          }

         
          </form>
        </div>
  
     </div>     

   
 
</>

      )
        
        
        
}


export default Card;

