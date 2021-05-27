import React, { useState } from "react";
import axios from "axios"
import ModalConfirm from "../booking/Modal"
import "./register.css"


function RegisterForm() {

  const intitialValue = {
      username:" ",
      email:" ",
      password:""
  }

  const [registerValues, setRegisterValues] = useState(intitialValue)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

    
function handleOnChange(e) {
       setRegisterValues({...registerValues, [e.target.name]: e.target.value})
}

function handleOnSubmit(e) {
       e.preventDefault();
  
       
      axios.post('https://bookingtove.herokuapp.com/auth/local/register', {
                username: registerValues.username,
                email: registerValues.email,
                password: registerValues.password,
            })
            
            .then( (e)=> { 
              
              if(e.data.user) {
                setSuccess("register")
              }
          
              
            })
            .catch((err)=> {setError(err.response.data.message[0].messages[0].message)}) 
            
    } 

  return (
 
    <>
    <div className="h-screen font-sans bg-cover register">
    <div className="container flex items-center justify-center flex-1 h-full mx-auto">
      <div className="w-full max-w-lg">
        <div className="leading-loose">
        
          
      
          <form className="max-w-sm p-10 m-4 bg-white bg-opacity-25 rounded shadow-xl" onSubmit={handleOnSubmit}>

          <p className="text-lg font-bold text-center text-grey">REGISTER</p>
          
          <div className="">
            <label className="block text-sm text-white">
            Username:
            </label>

            <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              type="text"
              name="username"
              placeholder="enter"
              value={registerValues.username}
              onChange={handleOnChange}
            />
            </div>

          <div className="text-red-600"> {error}</div>
          
            <label className="block text-sm text-white">
              Enter email:
            </label>

            <input
              className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              type="text"
              placeholder="email"
              name="email"
              value={registerValues.email}
              onChange={handleOnChange}
            />

            <label
              htmlFor="password"
              className="block text-sm text-white" >
              Password:
            </label>

            <input
              type="password"
              name="password"
              value={registerValues.password}
              onChange={handleOnChange}
              className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
          
            />

<div className="flex items-center justify-between mt-4">
            <button className="mt-8 text-center text-md sm:flex sm:flex-wrap sm:mb-4">
              SIGN UP
            </button>
            </div>

            
            <ModalConfirm whichOne={success}/>
            
            
          </form>
        </div>
      </div>
    </div>

  </div>
</>


);


      };

export default RegisterForm;
