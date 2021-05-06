import CardList from "./CardList";
import LoginForm from "./LoginForm";
import Home from "./Home";
import Navbar from "./Navbar";
import RegisterForm from "./RegisterForm";
import confirmBooking from "./ConfirmBooking"
import contactUs from "./contact"
import AddProduct from "./AddProduct"
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
        </Switch>

  
      </Router>
  );
}
