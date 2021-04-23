import { NavLink } from "react-router-dom";

function Navbar() {
    return (    

    
      <div className="flex flex-wrap items-center justify-between p-5 bg-blue-200">

           
            
            <NavLink
              to="/"
              className="inline-flex items-center px-3 py-6 mr-4 text-4xl font-bold tracking-widest text-grey-100 hover:text-green-800"
            ></NavLink>

<NavLink
              to="/"
              className="inline-flex py-3 my-6 mr-6 rounded items-left text-grey-200 hover:text-green-800"
            >
              {" "}
              About us{" "}
            </NavLink>
  
            <NavLink
              to="/Cardlist"
              className="inline-flex items-center py-3 my-6 rounded text-grey-200 hover:text-green-800"
            >
              {" "}
              Our offices{" "}
            </NavLink>
  
            
  
            <NavLink
              to="/LoginForm"
              className="inline-flex items-center py-3 my-6 rounded text-grey-200 hover:text-green-800"
            >
              {" "}
              Login{" "}
            </NavLink>

            <NavLink
              to="/RegisterForm"
              className="inline-flex items-center py-3 my-6 rounded text-grey-200 hover:text-green-800"
            >
              {" "}
              Register{" "}
            </NavLink>
      </div>

    
    );
  }
  

  
  export default Navbar