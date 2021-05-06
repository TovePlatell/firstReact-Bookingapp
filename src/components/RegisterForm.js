import React, {useEffect, useState } from "react";
import {useHistory} from "react-router-dom";
import axios from "axios"


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
              
              if(e.data.user) 
              
              history.push("/LoginForm");
              
            })
            .catch((err)=> {setError(err.response.data.message[0].messages[0].message)}) 
            
    } 

  return (
 
    <>
    <div className="flex flex-col h-screen bg-gray-100">
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="grid mx-2 my-20 place-items-center sm:my-auto">
        <div className="w-11/12 p-12 px-6 py-10 bg-white rounded-lg shadow-md sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 sm:px-10 sm:py-6 lg:shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-gray-800 lg:text-4xl">
          Register
          </h2>

          <form className="mt-10" onSubmit={handleOnSubmit}>
            <label className="block text-xs font-semibold text-gray-600 uppercase">
            Username:
            </label>

            <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
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
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
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
              Password
            </label>

            <input
              type="password"
              placeholder="password"
              name="password"
              value={registerValues.password}
              onChange={handleOnChange}
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
          
            />

          
            <button
              //type="submit"
              //value="submit"
              //onClick = {handleOnSubmit}
              className="w-full py-3 mt-10 font-medium text-white uppercase bg-gray-800 rounded-sm focus:outline-none hover:bg-gray-700 hover:shadow-none"
            >
              Sign up
            </button>
          

            {/* <!-- Another Auth Routes --> */}
            <div className="mt-8 text-sm text-center sm:flex sm:flex-wrap sm:mb-4">
            
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>}
</>


);


      };

export default RegisterForm;
