import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
import Products from "./components/Products.component"
import CustomerInfo from "./components/CustomerInfo.component"
import Cart from "./components/Cart.component"
import Homepage from "./components/Homepage.component"
import LogIn from "./components/LogIn.component"

function App() {
  return (
    <Router>
    <div className="Container">
      <Navbar />  
      <br/>
      <Route path="/" exact component = {Homepage}/>
      <Route path = "/Products" exact component = {Products}/>
      <Route path = "/Customer" exact component = {CustomerInfo}/>
      <Route path = "/Cart" exact component = {Cart}/>
      <Route path = "/LogIn" exact component = {LogIn}/>
    </div>
    </Router>
  );
}

export default App;
