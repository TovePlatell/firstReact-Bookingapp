import CardList from "./cards/CardList";
import LoginForm from "./login/LoginForm";
import Home from "./home/Home";
import Navbar from "./home/Navbar";
import RegisterForm from "./register/RegisterForm";
import confirmBooking from "./booking/ConfirmBooking"
import contactUs from "./home/contact"
import AddProduct from "./cards/AddProduct"
import ResetPassword from "./register/ResetPassword"
//import UploadFile from "./cards/UploadFile.js"
import UserPage from "./booking/UserPage"
//import Calendar from "react-calendar"


import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// react-router-dom ??

// yarn add react-router-dom

// olika router

export default function AppRoute() {
  return (
      <Router>
      <Navbar />
     
    
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cardlist" component={CardList} />
          <Route exact path="/LoginForm" component={LoginForm} />
          <Route exact path="/RegisterForm" component={RegisterForm} />
          <Route exact path="/confirmBooking" component={confirmBooking} /> 
          <Route exact path="/contact" component={contactUs} /> 
          <Route exact path="/AddProduct" component={AddProduct} /> 
          <Route exact path="/ResetPassword" component={ResetPassword} /> 
          <Route exact path="/UserPage" component={UserPage} />
        </Switch>

  
      </Router>
  );
}
