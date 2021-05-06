/* import React, {useState} from "react";
import LoginForm from "./LoginForm"
//import {NavLink} from "react-router-dom";
//import Form from "./Form"
import axios from "axios"

function Logins(){

    const initialValues= {
        email:"",
        password:""
      }

      const [formValues, setFormValues]= useState(initialValues);
const [error, setError]= useState("")
const [authenticated, setAuthenticated] = useState(false);
const [username, setUsername] = useState("")

function handleOnchange(e) {
    setFormValues({...formValues, [e.target.name]:e.target.value})
  }

   function handleOnSubmit(e){
     e.preventDefault();

    // axios request till login sidan 
  axios
  .post('http://localhost:1337/auth/local', {
    identifier: formValues.email,
    password: formValues.password,
  })
  .then(response => {
    // Handle success.
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
    console.log("user data ", response.data)
    setUsername(response.data.user.username)
    setAuthenticated(true);
    // ändra state som kommer att rendera nån component vid inloggning
  })
  .catch( (err)=>{
     console.log(err); 
    setError("Dina inloggningsuppgifter stämmer inte")
  })
   }

return(


    <LoginForm />
)

} */

      
    /* 
    const[user, setUser] = useState({name:"", email:""});
    const adminUser = {
        email:"tove@tove.se",
        password:"tove123"
    }
    const Login = (props) => {
        
        console.log(props)
       // console.log("CURLY: ",{props})
        //console.log("UTAN: ", props)
        setUser({
            ...user,
            name: props.name,
            email: props.value
        });
        
    }
 */
    /* return(
    
        <div className="Login">
        {(user.email !== "") ? ( 
            <div className="welcome">
            <h2 className="text-xl font-extrabold text-center">WELCOME </h2>
            <div className="text-center">{user.name}</div>
            <button className="px-3 py-3 mt-10 font-medium text-white uppercase bg-gray-800 rounded-sm pw-full focus:outline-none hover:bg-gray-700 hover:shadow-none">Logout</button>
                
            </div>
              
    ) : (
        
       <LoginForm props={Login}/>
       
        )}

    </div>
    )
    
    } */


