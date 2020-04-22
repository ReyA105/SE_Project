import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/navbar.component"
import Products from "./components/Products.component"
import CustomerInfo from "./components/CustomerInfo.component"
import Cart from "./components/Cart.component"
import Homepage from "./components/Homepage.component"
import Login from "./components/LogIn.component"
import CreateUser from "./components/CreateUser.component"
import OrderHistory from "./components/OrderHistory.component"
import ProductInfo from  "./components/ProductInfo.component"
import Checkout from "./components/Checkout.component"
import AddressUpdate from "./components/AddressUpdate.component"

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
      <Route path = "/Login" exact component = {Login}/>
      <Route path = "/CreateUser" exact component = {CreateUser}/>
      <Route path ="/OrderHistory" exact component = {OrderHistory}/>
      <Route path = "/ProductInfo" exact component = {ProductInfo}/>
      <Route path = "/Checkout" exact component = {Checkout}/>
      <Route path ="/AddressUpdate" exact component ={AddressUpdate}/>


    </div>
    </Router>
  );
}

export default App;
