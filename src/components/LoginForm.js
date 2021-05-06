import React, {useEffect, useState, useCallback } from 'react';
import axios from "axios";
import {NavLink, useHistory} from "react-router-dom"
import CardList from "./CardList"
import {getUser, setUser} from "../utils/user"



function Login() {

  // steg 1: ?? 
  const initialValues= {
    email:"",
    password:""
  }
const history = useHistory();
const [formValues, setFormValues]= useState(initialValues);
const [errors, setError]= useState("")
// const [authenticated, setAuthenticated] = useState(false);
const [username, setUsername] = useState("")

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
    setUser(response.data.jwt)
    setUsername(response.data.user.username)

    history.go(0)
})
.catch((err)=>{
  console.log(err); 
  setError("Username or password do not match")
})

setUsername({})

   }

  

  return (
    <>
  
  {getUser().length !== 0 ? <> <div>welcome{username}</div>
   <CardList username={username}
   /> 

  </>
  :
  
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="grid mx-2 my-20 place-items-center sm:my-auto">
        <div className="w-11/12 p-12 px-6 py-10 bg-white rounded-lg shadow-md sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 sm:px-10 sm:py-6 lg:shadow-lg">
          {/* <!-- Card Title --> */}
          <h2 className="font-medium text-center text-gray-800">
            Login
          </h2>
          <h1>{errors}</h1>
          <form className="mt-10" onSubmit={handleOnSubmit} method="POST">
            {/* <!-- Email Input --> */}

            <label
              htmlFor="email"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              E-mail
            </label>
            <input
              type="text"
              name="email"
              onChange={handleOnchange}
              //onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={formValues.email}
              id="email"
              placeholder="e-mail address"
              autoComplete="email"
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              required
            />

            {/* <!-- Password Input --> */}
            <label
              htmlFor="password"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleOnchange}
              value={formValues.password}
              placeholder="password"
              autoComplete="current-password"
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              required
            />
            {/* <!-- Auth Buttton --> */}
            <button
              type="submit"
              className="w-full py-3 mt-10 font-medium text-white uppercase bg-gray-800 rounded-sm focus:outline-none hover:bg-gray-700 hover:shadow-none"
            >
              Login
            </button>

            {/* <!-- Another Auth Routes --> */}
            <div className="mt-8 text-sm text-center sm:flex sm:flex-wrap sm:mb-4">
              <button className="underline flex-2">
                Forgot password?
              </button>

              <p class="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
                or
              </p>

              <NavLink to="/registerForm">
                <input
                  type="submit"
                  value="REGISTER"
                  className="underline flex-2"
                />
              </NavLink>
            </div>
          </form>
        </div>
      </div> 
    </div>
     

  }
     
     </>

     
     
);
}


export default Login;