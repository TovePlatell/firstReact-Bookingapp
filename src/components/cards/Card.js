import React, { useState } from "react";
import axios from "axios"
import Modal from "react-modal"

import { getUser } from "../utils/user";
import { Link } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import FormatPrice from "../utils/formatPrice"

function Card({ productName, productId, description, location, price, image }) {
  const [bookClicked, setBookClicked] = React.useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [editProduct, setEditProduct] = useState({})

  const [modalIsOpen,setIsOpen] = React.useState(false);
  
  function openModal() {
    setIsOpen(true);
  }


  function closeModal(){
    setIsOpen(false);
  }

  const handleEdit = async (e) => {
    e.preventDefault()
    
    await axios.get(`http://localhost:1337/products/${productId}`).then((res) => {
      setEditProduct(res.data)
      openModal()
    })
  } 

  const handleChange = ({target}) => {
    const {name, value} = target;
    setEditProduct({...editProduct, [name]:value})
    
  }

  const handleSubmit = async () => {
    await axios.put(`http://localhost:1337/products/${productId}`, editProduct)
  }

  return (
    <>
     {modalIsOpen && 
     (
      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Edit Product"
        >

        <button onClick={closeModal}>close</button>
          <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
            <input onChange={handleChange} className="px-2 py-1 border" name="name" value={editProduct.name}/>
            <button>Update Product</button>
          </form>
        </Modal>
     )
     }
      <div className="container flex overflow-hidden rounded-lg shadow mx-mx-auto -w-md mx-h-full xl:max-w-3xl">
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

            <DatePicker
              selected={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
                console.log("AA", date);
              }}
              placeholderText="choose a startdate"
              dateFormat="dd-MM-yyy"
              minDate={new Date()}
              startDate={selectedDate}
              selectsStart
              isClearable
              showYearDropdown
              scrollableMonthYearDropdown
              className="border-4 border-double border-light-blue-500"
            />

            {/* <div>Selected={selectedDate ? selectedDate.toString() : null}</div>
          <div>Selected ={endDate ? endDate.toString() : null}</div> */}

            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              placeholderText="choose an enddate"
              dateFormat="dd-MM-yyyy"
              selectsEnd
              startDate={selectedDate}
              minDate={selectedDate}
              endDate={endDate}
              isClearable
              showYearDropdown
              scrollableMonthYearDropdown
              className="border-4 border-double border-light-blue-500"
            />

            <p className="block mb-2 text-sm font-semibold text-gray-700">
              <strong>Located:</strong>
              {location}
            </p>

            <p className="block mb-2 text-sm font-semibold text-gray-700">
              <strong>Price:</strong>
              {FormatPrice(price)}
            </p>

            {getUser().length === 0 ? (
              <div className="text-sm font-semibold text-gray-700">
                {" "}
                <Link to="./LoginForm">Login to book this</Link>
              </div>
            ) : (
              <Link
                to={`/UserPage?name=${productName}&price=${price}&location=${location}&description=${description}&id=${productId}`}
              >
                <div className="flex justify-between">
                  <button
                    onClick={() => {
                      setBookClicked(!bookClicked);
                    }}
                    className="text-sm text-gray-600 align-baseline pinline-block hover:text-gray-800"
                  >
                    Book
                  </button>
                  <p
                    onClick={handleEdit}
                    className="text-sm text-gray-600 align-baseline pinline-block hover:text-gray-800"
                  >
                    Edit
                  </p>
                </div>
              </Link>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Card;
