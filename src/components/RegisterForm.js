import React, {useState} from "react";
import {NavLink} from "react-router-dom"


const RegisterForm = () =>{

  const[firstname, setFirstName] = useState("");
  const[lastname, setLastName] = useState("");

  const onSubmit = e =>{

      e.preventDefault();

      RegisterForm([firstname,lastname])
  }

  return(
      <div className="flex justify-center">
      <form onSubmit={onSubmit}>
      <label className="font-medium text-gray-800 text-l"> First Name:</label>
      <input type="text"
          value={firstname}
          onChange= { e =>{setFirstName(e.target.value)}}
         
      />
      <br></br>
      <label className="font-medium text-gray-800 text-l"> Last Name: </label>
      <input type="text"
      value={lastname}
       onChange= { e =>{setLastName(e.target.value)}}
     
      />

      <br/>

     <NavLink to= "./LoginForm"> <button type="submit" className= "px-4 py-2 font-bold text-white bg-blue-300 rounded-full hover:bg-blue-400">Register</button></NavLink>

      </form>
      </div>
  )
}
  

  export default RegisterForm;