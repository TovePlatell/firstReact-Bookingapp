import Modal from  "react-modal"
  
import React, {useState} from "react";
import {Link} from "react-router-dom"


export default function ModalConfirm({success, login}) {
    
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };
    
    React.useEffect(() => {
        openModal()
    }, [success, login])


    const initialValues = {
        name: "",
        timeToAppointment: "",
        mobile: ""
    }

    const [modalIsOpen, setIsOpen] = useState(false);
    const [formValues, setFormValues] = useState(initialValues)


    function openModal() {
        setIsOpen(true)
    }

    function onHandleChange(e) {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    function onHandleSubmit(e) {
        e.preventDefault();
    }

    function closeModal() {
        setIsOpen(false)
    }


        return ( // hur får jag att så att man kan återanvända modalen och har olika hälsningar på modalen?
            <> 
                {/* <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded" onClick={openModal} >boka</button> */}
                {success && <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
                    <button onClick={closeModal}>(X)</button>
                        <div>REGISTER</div>
                                <form onSubmit={onHandleSubmit}>
                        <input type="text" name="name" value={formValues.name} onChange={onHandleChange} />
                        <input type="text" name="timeToAppointment" value={formValues.timeToAppointment} onChange={onHandleChange} />
                        <input type="number" name="mobile" value={formValues.mobile} onChange={onHandleChange} />
                        <button type="submit">Send</button>
                    </form> 
                </Modal>}
                {login && <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
                    <button onClick={closeModal}>(X)</button>
                        <div>Login success</div>
                        <Link to="/userpage">Go to userpage</Link>
                </Modal>}
            </>
        )
}
