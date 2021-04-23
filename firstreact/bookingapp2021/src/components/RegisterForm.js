import React, {useState} from "react";
import {Link} from "react-router-dom"


const RegisterForm = () =>{

  const[firstname, setFirstName] = useState("");
  const[lastname, setLastName] = useState("");

  const onSubmit = e =>{

      e.preventDefault();

      RegisterForm([firstname,lastname])
  }

  return(
      
      <form onSubmit={onSubmit}>
      <label> First Name:</label>
      <input type="text"
          value={firstname}
          onChange= { e =>{setFirstName(e.target.value)}}
      />
      <br></br>
      <label> Last Name: </label>
      <input type="text"
      value={lastname}
       nChange= { e =>{setLastName(e.target.value)}}
      />

      <br/>

     <Link to= "./LoginForm"> <button type="submit" className= "px-4 py-2 font-bold text-white bg-blue-300 rounded-full hover:bg-blue-400">Register</button></Link>

      </form>
  )
}
  

  export default RegisterForm;