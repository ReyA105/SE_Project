import {BrowserRouter as Router,Route} from "react-router-dom"
import React, { Component } from 'react';
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
import axios from "axios";

export default class App extends Component{
  constructor(){
    super();

    this.state= {
      loggedInStatus: "NOT_LOGGED_IN",
      user:{}
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  checkLoginStatus() {
    let  query = "http://localhost:3000/Customer/"+this.state.user._id+"/loggedIn"
    axios
      .get(query)
      .then(response => {
        if (
          response.data.loggedIn &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user
          });
        } else if (
          !response.data.loggedIn &
          (this.state.loggedInStatus === "LOGGED_IN")
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
          });
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    });
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    });
  }

  render(){
    return (
      <Router>
      <div className="Container">
        <Navbar />  
        <br/>
        <Route exact path={"/"} render ={props => (
          <Homepage {...props} 
          loggedInStatus={this.state.loggedInStatus} />
        )}/>

        <Route exact path={"/Products"} render ={props => (
          <Products {...props} 
          loggedInStatus={this.state.loggedInStatus} />
        )}/>

        <Route exact path={"/Customer"} render ={props => (
          <CustomerInfo {...props} 
          loggedInStatus={this.state.loggedInStatus} />
        )}/>

        <Route exact path={"/Cart"} render ={props => (
          <Cart {...props} 
          loggedInStatus={this.state.loggedInStatus} />
        )}/>

        <Route exact path={"/Login"} render ={props => (
          <Login {...props} 
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          loggedInStatus={this.state.loggedInStatus} />
        )}/>
        
        <Route exact path={"/CreateUser"} render ={props => (
          <CreateUser {...props} 
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          loggedInStatus={this.state.loggedInStatus} />
        )}/>

        <Route exact path={"/OrderHistory"} render ={props => (
          <OrderHistory {...props} 
          loggedInStatus={this.state.loggedInStatus} />
        )}/>

        <Route exact path={"/ProductInfo"} render ={props => (
          <ProductInfo {...props} 
          loggedInStatus={this.state.loggedInStatus} />
        )}/>

        <Route exact path={"/Checkout"} render ={props => (
          <Checkout {...props} 
          loggedInStatus={this.state.loggedInStatus} />
        )}/>

        <Route exact path={"/AddressUpdate"} render ={props => (
          <AddressUpdate {...props} 
          loggedInStatus={this.state.loggedInStatus} />
        )}/>

      </div>
      </Router>
    )
  }
}