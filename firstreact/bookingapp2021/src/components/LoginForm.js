import React, {useState} from 'react'
import {Link} from "react-router-dom"



function LoginForm( {Login, error}) {

  const [details, setDetails] = useState({name: "", email: "", password: ""});

  const submitHandler = e => {
    e.preventdefault();


    Login(details);
  }

  return(

    <form onSubmit = {submitHandler}>
      <div className="form-inner"></div>
    <h1 className="text-lg">Enter your details</h1>
      {/*error*/}
      <div className="form-group">
      <label> Name: </label>
      <input type="text" name="name" id="name" onChange={e => setDetails({...details, name:e.target.value})} value={details.name} /> {/*/every time we change it we calling the function and passing in the event and the event holds the target value pass the object - update the name */}
      </div>
      <div className="form-group">
        <label> Email:</label>
        <input type="email" name="email" id="email"/>
      </div>
      <div className="form-group">
        <label> Password:</label>
        <input type="password" name="password" id="password"/>
      </div> 
      
      <Link to= "./Cardlist"> <button type="submit" className= "px-4 py-2 font-bold text-white bg-blue-300 rounded-full hover:bg-blue-400">Login</button></Link>
     <div><span>Become a member</span></div>
      <Link to = "/RegisterForm"><input type="submit" value="REGISTER" className= "px-4 py-2 font-bold text-white bg-blue-300 rounded-full hover:bg-blue-400" /> </Link> 
      

      
    </form>
  )
}

export default LoginForm;

    /* const initialValues = {
        officeName:" ",
        location: " ",
        price: " "
    }
    const [formValues, setFormValues] = useState(initialValues)


    function onHandleSubmit(e) {
      // ska skickas till db eller api endpoint
      console.log(formValues)
      e.preventDefault();


    }
  
// vi sätter setFormValues utefter inputen - sparas i formvalues
// e.target.name = tar value från inputen ... måste ha tre punkter för att ta gamla värdet//extrahera 
//e.target.value 

    function onHandleChange(e) {

      setFormValues( {
        ...formValues,
        [e.target.name]:e.target.value

        
        // fixa detta 
    })

  }
    return (
        <>
            
      
      <form onSubmit={onHandleSubmit} >
            <label> Search for Office:  </label> 
            
            <input className="border" placeholder="Choose your location" value={formValues.productName} name="productName" onChange={onHandleChange} />

            <input className="border " placeholder="Max price" type="number" name="price" value ={formValues.price} onChange={onHandleChange}/>

            <button className="bg-purple-600">Search</button>
       </form>
        
        
        </>
    )
}

export default Form */