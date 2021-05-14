import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import axios from "axios"
import ModalConfirm from "../booking/Modal"


function RegisterForm() {

  const intitialValue = {
      username:" ",
      email:" ",
      password:""
  }

  const [registerValues, setRegisterValues] = useState(intitialValue)
  const [username, setUsername] = useState("");
 // const [loggedIn, SetLoggedIn] = useState(false);
  const [error, setError] = useState("")
  const history = useHistory();
  const [success, setSuccess] = useState(false)

    
function handleOnChange(e) {
       setRegisterValues({...registerValues, [e.target.name]: e.target.value})
}

function handleOnSubmit(e) {
       e.preventDefault();


       
       
      axios.post('http://localhost:1337/auth/local/register', {
                username: registerValues.username,
                email: registerValues.email,
                password: registerValues.password,
            })
            
            .then( (e)=> { 
              
              if(e.data.user) {
                setSuccess(true)
              }
          
              
            })
            .catch((err)=> {setError(err.response.data.message[0].messages[0].message)}) 
            
    } 

  return (
 
    <>
    <div className="flex flex-col h-screen bg-gray-100">
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="grid mx-2 my-20 place-items-center sm:my-auto">
        <div className="w-11/12 p-12 px-6 py-10 bg-white rounded-lg shadow-md sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 sm:px-10 sm:py-6 lg:shadow-lg">
          <h2 className="text-2xl text-center text-gray-800 lg:text-4xl">
          Register
          </h2>

          <form className="mt-10" onSubmit={handleOnSubmit}>
            <label className="block text-xs font-semibold text-gray-600 uppercase">
            Username:
            </label>

            <input className="w-full px-5 py-1 my-2 text-gray-700 bg-gray-100 rounded"
              type="text"
              name="username"
              placeholder="enter"
              value={registerValues.username}
              onChange={handleOnChange}
            />

<div className="text-purple-600"> {error}</div>
            <label className="block text-xs font-semibold text-gray-600 uppercase">
              Enter email:
            </label>

            <input
              className="w-full px-5 py-1 my-2 text-gray-700 bg-gray-100 rounded"
              type="text"
              placeholder="email"
              name="email"
              value={registerValues.email}
              onChange={handleOnChange}
            />

            <label
              for="password"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Password:
            
            </label>

            <input
              type="password"
         
              name="password"
              value={registerValues.password}
              onChange={handleOnChange}
              className="w-full px-5 py-1 my-2 text-gray-700 bg-gray-100 rounded"
          
            />

          
            <button
              //type="submit"
              //value="submit"

              // Här vill man kunna använda modalen till en popup som - nu blir de två button....
              className="mt-8 text-center text-md sm:flex sm:flex-wrap sm:mb-4"
            >
              SIGN UP

             

              
              
            </button>
            <ModalConfirm success={success}/>
            
            {/* <!-- Another Auth Routes --> */}
            <div className="mt-8 text-sm text-center sm:flex sm:flex-wrap sm:mb-4">
            
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
</>


);


      };

export default RegisterForm;
