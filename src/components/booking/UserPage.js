import axios from "axios";
import React, { useState } from "react";

import { useLocation, useHistory } from "react-router-dom";

function UserPage() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  function Heading({ Heading }) {
    return <h1 className="mb-8 text-2xl text-center">{Heading}</h1>;
  }

  function Price({ Price }) {
    return (
      <h3 className="mb-8 text-center text-1xl">
        <span>
          <strong>Price: </strong>
        </span>
        {Price} <span>SEK</span>
      </h3>
    );
  }
  function Location({ location }) {
    return (
      <h3 className="mb-8 text-center text-1xl">
        <span>
          <strong>Location: </strong>
        </span>
        {location}{" "}
      </h3>
    );
  }
  function Description({ Description }) {
    return (
      <h3 className="mb-8 text-center text-1xl">
        <span>
          <strong>Description: </strong>
        </span>
        {Description}{" "}
      </h3>
    );
  }

  let query = useQuery();

  const bookingValues = {
    name: "",
    email: "",
    phonenumber: "",
  };

  const [formValues, setFormValues] = useState(bookingValues);

  const history = useHistory();

  async function onSubmit(e) {
    e.preventDefault();

    const response = await axios.post("http://localhost:1337/bookings", {
      name: formValues.name,
      phonenumber: formValues.phonenumber,
      product: query.get("id"),
      users_permissions_user: localStorage.getItem("id"),
    });

    localStorage.setItem("BookingID", response.data.id);

    history.push("/Paynow");
  }

  function onChange(e) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    console.log(formValues);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col min-h-screen bg-grey-lighter">
          <div className="container flex flex-col items-center justify-center max-w-sm px-2 m-4 mx-auto flex-2">
            <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
              <h3 className="mb-8 text-xs text-center">
                Confirm your booking below:
              </h3>
              <Heading Heading={query.get("name")} />
              <Price Price={query.get("price")} />
              <Description Description={query.get("description")} />
              <Location location={query.get("location")} />

              <input
                type="text"
                className="w-full px-5 py-3 my-2 text-gray-700 bg-gray-200 rounded"
                name="name"
                placeholder="Name"
                onChange={onChange}
              />

              <input
                type="number"
                className="w-full px-5 py-3 my-2 text-gray-700 bg-gray-200 rounded"
                name="phonenumber"
                placeholder="Phone"
                onChange={onChange}
              />

              <button
                type="submit"
                className="px-10 py-3 pl-6 mt-8 ml-12 text-xs text-white uppercase bg-gray-500 rounded shadow mmx-auto hover:bg-gray-700 focus:shadow-outline focus:outline-none"
              >
                Continue for checkout
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default UserPage;
