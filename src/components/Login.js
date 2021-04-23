import React, {useState} from "react";
import LoginForm from "./LoginForm"
import {NavLink} from "react-router-dom";
//import Form from "./Form"

function Logins(){
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

    return(
        

        
        <div className="Login">
        {(user.email !== "") ? ( 
            <div className="welcome">
            <h2>WELCOME, <span>{user.name}</span></h2>
            <button className="px-4 py-2 font-bold text-white bg-blue-300 rounded-full hover:bg-blue-400 focus:shadow-outline focus:outline-none">Logout</button>
                
            </div>

         
            
       
              
    ) : (
        
       <LoginForm props={Login}/>
       
        )}

    </div>
    )
    
    }


export default Logins;