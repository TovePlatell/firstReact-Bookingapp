import React from 'react'
import axios from "axios"

function ResetPassword() {

    function resetRequest() {

        

        axios
        .post(`http://localhost:1337/auth/send-email-confirmation`, {
          email: 'toveplatell@gmail.com', // user's email
        })
        .then(response => {
          console.log('Your user received an email');
        })
        .catch(error => {
          console.error('An error occurred:', error.response);
        });

    }
    
    return (

      
        <form onSubmit={resetRequest}>
        <div className="px-6 mx-6">
          <input type="text" value="" name="email" required="" onChange=""
          />
          <label>Type in your email to reset password</label>
        </div>
    
        <button>
        
         Reset password
        </button>
    
    </form>
    )
}

export default ResetPassword
