import React, {useEffect, useState} from 'react';
import axios from "axios";


// Ni som använder yarn : yarn add axios 
// npm : npm i axios 
function  API () {

    const [data , setData ] = useState({});
    
    useEffect(()=>{
         const fetchData = async()=> {

            try {
         const response =   await axios.get("http://localhost:1337/Confirmbooking?users_permissions_user.id=29")
          // axios är ett fetch bibliotek , http get, post, update , delete  
          console.log(response.data)
          const res = response.data 
          // json.string
          setData(res)
        }
    
    catch(err) {
        console.log(err)    
    }
        
}
        fetchData()   
    }, [])

    
    return (
    <>
    data kommer att kunna skriva ut här:-  
    {data.title}
    <div> Hello from api </div> 
    </>
    
    )

}


export default API;
