import Home from "./home/Home";
import Navbar from "./home/Navbar";
import ContactUs from "./home/Contact"

import RegisterForm from "./register/RegisterForm";
import LoginForm from "./login/LoginForm";
import UserPage from "./booking/UserPage"

import CardList from "./cards/CardList";
import AddProduct from "./cards/AddProduct"

import API from "./API"

import Checkout from "./booking/Checkout";
import MyBookings from "./booking/MyBookings";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";



export default function AppRoute() {
  return (
      <Router>
      <Navbar />
     
     
    
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cardlist" component={CardList} />
          <Route exact path="/LoginForm" component={LoginForm} />
          <Route exact path="/RegisterForm" component={RegisterForm} />
          <Route exact path="/Contact" component={ContactUs} /> 
          <Route exact path="/AddProduct" component={AddProduct} /> 
          <Route exact path="/API" component={API} /> 
          <Route exact path="/UserPage" component={UserPage} /> 
          <Route exact path="/Checkout" component={Checkout} /> 
          <Route exact path="/MyBookings" component={MyBookings} /> 
         
          
        </Switch>

        {/* <Footer /> */}
      </Router>
  );
}
