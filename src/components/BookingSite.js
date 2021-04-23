import React, { useState } from "react";

import { NavLink } from "react-router-dom";

function BookingSite() {

  const bookingValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: ""
  }

  const [formValues, setFormValues] = useState(bookingValues);

  function onSubmit(e) {
    e.preventDefault();
    // console.log(formValues)
  
  }

  function onChange(e) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
      
    });
    // console.log("firstName:", formValues.firstName, "lastName:", formValues.lastName)
  }

  return (
    <div className="flex justify-center">
      <form onSubmit={onSubmit}>
        <label className="font-medium text-gray-800 text-l">
          Complete booking below:
        </label>
        <div className="mt-2 rounded-md">
          <div className="md:w-1/3">
            <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0">
              Firstname:
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              value={formValues.firstName}
              name="firstName"
              onChange={onChange}
              className="px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-blue-500"
              placeholder="Enter firstname"
            />
          </div>
          <div className="mt-2 rounded-md">
            <div className="md:w-1/3">
              <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0">
                Lastname:
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                value={formValues.lastName}
                name="lastName"
                onChange={onChange}
                className="px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="Enter lastname"
              />
            </div>
          </div>
          <div className="mt-2 rounded-md">
            <div className="md:w-1/3">
              <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0">
                Address:
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                value={formValues.address}
                name="address"
                onChange={onChange}
                className="px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="Enter address"
              />
            </div>
          </div>
          <div className="mt-2 rounded-md">
            <div className="md:w-1/3">
              <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0">
                Mobile:
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                type="number"
                value={formValues.mobile}
                name="mobile"
                onChange={onChange}
                className="px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="Enter mobile number"
              />
            </div>
          </div>
       <NavLink to ="/cardlist">
          <button className="px-4 py-2 font-bold text-white bg-blue-300 rounded-full hover:bg-blue-400 focus:shadow-outline focus:outline-none">
            Confirm
          </button>
         </NavLink>
          
          
  
        
        </div>
      </form>
    </div>
  );
}

export default BookingSite;