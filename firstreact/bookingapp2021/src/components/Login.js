import React, {useState} from "react";
import LoginForm from   "./LoginForm"
//import Form from "./Form"

function Login(){

    const adminUser = {

        email:"tove@tove.se",
        password:"tove123"
    }

    const[user, setUser] = useState({name:"", email:""});
    const[error,setError] = useState("");

    const Login = details => {
        console.log(details);
    }

    const Logout = () => {
        console.log("Logout");
    }
    return(
        <div className="Login">
        {(user.email != "") ?(
            <div className="welcome">
            <h2>WELCOME, <span>{user.name}</span></h2>
            <button>Logout</button>
                
            </div>
          
              
    ) : (
        
       <LoginForm Login={Login} error={error}/>
       
        )}

    </div>
    )
}


export default Login;