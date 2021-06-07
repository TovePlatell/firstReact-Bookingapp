import React, { useState } from 'react';
import axios from "axios";
import {NavLink} from "react-router-dom"

import {getUser, setUser} from "../utils/user"

import LoginModal from "../booking/Modal"
import "./login.css"

function Login() {

  // steg 1: ?? 
  const initialValues= {
    email:"",
    password:""
  }

const [formValues, setFormValues]= useState(initialValues);
const [errors, setError]= useState("")
const [username, setUsername] = useState("")
const [login, setLogin] = useState(false)

function handleOnchange(e) {
  setFormValues({...formValues, [e.target.name]:e.target.value})
}

const handleOnSubmit = async (e) => {
     e.preventDefault();
  await axios
  .post('http://localhost:1337/auth/local', {
    identifier: formValues.email,
    password: formValues.password,
  })
  .then(response => {
    setUser(JSON.stringify({JWT: response.data.jwt, email: response.data.user.email}))
    setUsername(response.data.user.username)
    setLogin("login")
    
    localStorage.setItem("role", response.data.user.role.name);
    console.log("role",response.data.user.role.name)

    localStorage.setItem("id", response.data.user.id)
    console.log("id", response.data.user.id );
   
  
    
})
.catch((err)=>{
  console.log(err); 
  setError("Username or password do not match")

})

setUsername({})

   }

  return (
    <>

  
<div className="login">

  {getUser().length !== 0 ? 
   <div className="bg-green-400"> 
   <LoginModal whichOne={login}/> 
   
  </div> 
  
  : 


 
  <div className="h-screen font-sans bg-cover login">

      <div className="container flex items-center justify-center flex-1 h-full mx-auto">
        <div className="w-full max-w-lg">
        <div className="leading-loose">
        
        
         
          <form className="max-w-sm p-10 m-4 bg-white bg-opacity-25 rounded shadow-xl" onSubmit={handleOnSubmit} method="POST">
          <h1 className="pt-3 text-red-600">{errors}</h1>
          <p className="text-lg font-bold text-center text-grey">LOGIN</p>
            
             <div className="">
            <label
              htmlFor="email"
              className="block text-sm text-white"
            >
              E-mail
            </label>
           
           
            <input
              type="text"
              name="email"
              onChange={handleOnchange}
             
              value={formValues.email}
              id="email"
              className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              required
              placeholder="email"
            />
             </div>
             <div className="mt-2">
            <label
              htmlFor="password"
              className="block text-sm text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleOnchange}
              value={formValues.password}
              className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              required
              placeholder="password"
            />
            </div>
            
       <div className="flex items-center justify-between mt-4">
            <button
              type="submit"
              className="mt-8 text-center text-md sm:flex sm:flex-wrap sm:mb-4">
          
              Login
            </button>
            </div>

    
          

              <NavLink to="/registerForm">
                <input
                  type="submit"
                  value="REGISTER"
                  className="right-0 inline-block text-sm font-light align-baseline text-500 hover:text-red-400"
                />
              </NavLink>
         
          </form>
          </div>
        </div>
      </div> 
    </div>}
     

</div>
 

</>
 


 
);
}


export default Login;