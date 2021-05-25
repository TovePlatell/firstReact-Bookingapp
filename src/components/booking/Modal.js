import Modal from "react-modal";

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

/* import ConfirmBooking from "./ConfirmBooking" */

export default function ModalConfirm({ whichOne }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  React.useEffect(() => {
    openModal();
  }, [whichOne]);

  // const initialValues = {
  //   name: "",
  //   timeToAppointment: "",
  //   mobile: "",
  // };

  const [modalIsOpen, setIsOpen] = useState(false);
  const [formValues, setFormValues] = useState("");
  const history = useHistory()
 

  
  function openModal() {
    setIsOpen(true);
  }

  function onHandleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  function onHandleSubmit(e) {
    e.preventDefault();
  }

  function closeModal() {
    setIsOpen(false);
  }

  function clickFunction(){

    history.push("./CardList")
    window.location.reload()
  }
  function clickFunction2(){

    history.push("./MyBookings")
    window.location.reload()
  }
  return (
    <>
      
      {whichOne === "register" && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
        
          <button onClick={closeModal}>(x)</button>
          <div>welcome</div>
          <form onSubmit={onHandleSubmit}>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={onHandleChange}
            />
            <input
              type="text"
              name="email"
              value={formValues.email}
              onChange={onHandleChange}
            />
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={onHandleChange}
            />
            <Link to="/Loginform">Go to Login</Link>
          </form>
        </Modal>
      )}
      
      {whichOne === "login" && (
          
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
     
          <div>
          <h3 className="font-bold">Welcome</h3>
          <div className="mt-4">
            

            
          <button onClick={clickFunction} className="px-4 py-2 mr-2 text-white bg-gray-800 hover:bg-gray-600">Go to Offices 
          
          </button>
          <button onClick={clickFunction2} className="px-4 py-2 text-white bg-gray-800 hover:bg-gray-600">Go to MyBookings</button>
          </div>
          </div>
        </Modal>
      )}
      

      {/* {whichOne === "booked" && (
        <Modal
        isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          
      <ConfirmBooking info={info}/>
        </Modal>
      )} */}

      
    </>
  );
    
}
