import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function LoginForm({props}) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  console.log(details)
  const submitHandler = (e) => {
    e.preventDefault();
    props(details); // call the function and pass the prop/details
  
  }

  const changeHandler = ({target}) => {
    const {name, value} = target;
    setDetails({
      ...details,
      [name]: value
    });
  }

  return (
    <div className="flex justify-center">
      <form onSubmit={submitHandler}>
        <h1 className="text-lg">Enter your details</h1>
        {/*error*/}
        <div className="">
          <label className="font-medium text-gray-800 text-l"> Name: </label>
          <input
            type="text"
            name="name"
            onChange = {changeHandler}
            //onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />{" "}
          {/*/every time we change it we calling the function and passing in the event and the event holds the target value pass the object - update the name */}
        </div>
        <div className="">
          <label className="font-medium text-gray-800 text-l"> Email:</label>
          <input
            type="email"
            name="email"
            onChange = {changeHandler}
            //onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="">
          <label className="font-medium text-gray-800 text-l"> Password:</label>
          <input
            type="password"
            name="password"
            onChange={changeHandler}
            //onChange={(e) =>
              //setDetails({ ...details, password: e.target.value })
            //}
            value={details.password}
          />
        </div>{" "}
        
        <button
          type="submit"
          className="px-4 py-2 font-bold text-white bg-blue-300 rounded-full hover:bg-blue-400"
        >
          Login
        </button>
        
        <div>
          <span>Become a member</span>
        </div>
        <NavLink to="">
          <input
          type="submit"
            value="REGISTER"
            className="px-4 py-2 font-bold text-white bg-blue-300 rounded-full hover:bg-blue-400"
          />{" "}
        </NavLink>
      </form>
    </div>
  );
}

export default LoginForm;
