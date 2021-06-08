import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";

import { getUser } from "../utils/user";
import { Link } from "react-router-dom";

//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

//import FormatPrice from "../utils/formatPrice"

function Card({
  productName,
  productId,
  description,
  location,
  price,
  image,

}) {
  const [bookClicked, setBookClicked] = React.useState(false);
  // const [selectedDate, setSelectedDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());
  const [editProduct, setEditProduct] = useState({});

  const admin = localStorage.getItem("role");

  const [modalIsOpen, setIsOpen] = React.useState(false);



  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleEdit = async (e) => {
    e.preventDefault();

    await axios
      .get(`http://localhost:1337/products/${productId}`)
      .then((res) => {
        setEditProduct(res.data);
        openModal();
      });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setEditProduct({ ...editProduct, [name]: value });
  };

  const handleSubmit = async () => {
    await axios.put(`http://localhost:1337/products/${productId}`, editProduct);
  };

  return (
    <>
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Edit Product"
          ariaHideApp={false}
        >
          <div className="flex flex-col h-screen bg-gray-100">
            <div className="grid mx-2 my-20 place-items-center sm:my-auto">
              <div className="w-11/12 p-12 px-6 py-10 bg-white rounded-lg shadow-md sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 sm:px-10 sm:py-6 lg:shadow-lg">
                <p className="text-lg font-bold text-center text-grey">
                  Update products
                </p>
                <form onSubmit={handleSubmit} classname="mt-10">
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-gray-600 uppercase"
                  >
                    Name:{" "}
                  </label>
                  <input
                    onChange={handleChange}
                    className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                    name="name"
                    value={editProduct.name}
                  />
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-gray-600 uppercase"
                  >
                    Price:{" "}
                  </label>
                  <input
                    onChange={handleChange}
                    className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                    name="price"
                    value={editProduct.price}
                  />
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-gray-600 uppercase"
                  >
                    Description:{" "}
                  </label>
                  <input
                    onChange={handleChange}
                    className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                    name="description"
                    value={editProduct.description}
                  />
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-gray-600 uppercase"
                  >
                    Image:{" "}
                  </label>
                  <input
                    onChange={handleChange}
                    className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                    type="file"
                    name="file"
                    value={editProduct.image}
                  />
                  <button className="mt-8 ml-36 text-md sm:flex sm:flex-wrap sm:mb-4">
                    Finish
                  </button>
                  <button onClick={closeModal}>x</button>
                </form>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <div className="container flex my-10 mb-10 overflow-hidden rounded-lg shadow mx-mx-auto -w-md mx-h-full xl:max-w-3xl">
        <div className="relative hidden h-full xl:block xl:w-1/2">
          <img
            className="absolute object-cover w-full h-auto"
            src={"http://localhost:1337" + image}
            alt="some pic from database"
          />
        </div>

        <div className="w-full p-8 xl:w-1/2">
          <form action="">
            <p className="block mb-2 text-sm font-semibold text-gray-700">
              <strong>What:</strong>
              {productName}
            </p>

            <p className="block mb-2 text-sm font-semibold text-gray-700">
              <strong>About:</strong>
              {description}
            </p>

            <p className="block mb-2 text-sm font-semibold text-gray-700">
              <strong>Located:</strong>
              {location}
            </p>

            <p className="block mb-2 text-sm font-semibold text-gray-700">
              <strong>Price:</strong>
              {price}
            </p>

          
           <input className="mt-8" type="date" />
           <input className="" type="date" />

            {getUser().length === 0 ? (
              <div className="text-sm font-semibold text-gray-700">
                {" "}
                <Link to="./LoginForm">Login to book this</Link>
              </div>
            ) : (
              
              <Link
                to={`/UserPage?name=${productName}&price=${price}&location=${location}&description=${description}&id=${productId}`}
              >
              
                    <div className="justify-center">
                  <button
                    onClick={() => {
                      setBookClicked(!bookClicked);
                    }}
                    className="mt-10 text-sm text-gray-600 hover:text-gray-800"
                  >
                    Book
                  </button>
                  </div>
             
              </Link>
            )}

            {admin === "admin" ? (
             
                <button
                  onClick={handleEdit}
                  className="mt-4 text-sm text-gray-600 align-baseline pinline-block hover:text-gray-800"
                >
                  Edit
                </button>
             
                
             
            ) : (
              <span></span>
            )}

          
          </form>
        </div>
      </div>
    </>
  );
}

export default Card;
