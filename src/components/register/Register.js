/* import React, {useState, useEffect} from "react";
import RegisterForm from "./RegisterForm"
import FormSuccess from "./FormSuccess"


const Register = () => {

   const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){

    console.log(submitForm);
       setIsSubmitted(true);
   }
 
    return(
        
        <div>
             {!isSubmitted ? (<RegisterForm submitForm = {submitForm} />)
            :(<FormSuccess />)}

         </div>  
 )
    
  }


export default Register; */