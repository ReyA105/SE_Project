import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
import Products from "./components/Products.component"
import CustomerInfo from "./components/CustomerInfo.component"
import Cart from "./components/Cart.component"
import Homepage from "./components/Homepage.component"
import Login from "./components/LogIn.component"
import OrderHistory from "./components/OrderHistory.component"
import ProductInfo from  "./components/ProductInfo.component"
 import AddressUpdate from "./components/AddressUpdate.component"
import axios from "axios";

export default class App extends Component{
  constructor(props){
    super(props);

    this.state= {
      loggedInStatus: "NOT_LOGGED_IN",
      userID: 'null'
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    }


  checkLoginStatus() {
    let  query = "http://localhost:3000/Customer/"+this.state.userID
    axios
      .get(query)
      .then(response => {
        if (
          response.data.loggedIn &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data
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
    console.log(this.state.userID)
    this.checkLoginStatus();
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    });
  }

  handleLogin(data) {
    //console.log(data);
    this.setState({
      loggedInStatus: "LOGGED_IN",
      userID: data._id},
    );
  
  }

  render(){
    return (
    <div className="app">  
    
      <BrowserRouter>
      <Navbar />
      <Switch> 
        <Route exact path={"/"} render ={props => (
          <Homepage {...props} 
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          loggedInStatus={this.state.loggedInStatus} 
          userID = {this.state.userID}/>
        )}/>

        <Route exact path={"/Products"} render ={props => (
          <Products {...props} 
          loggedInStatus={this.state.loggedInStatus}
          userID = {this.state.userID} />
        )}/>

        <Route exact path={"/Customer"} render ={props => (
          <CustomerInfo {...props} 
          loggedInStatus={this.state.loggedInStatus} 
          userID = {this.state.userID}/>
        )}/>

        <Route exact path={"/Cart"} render ={props => (
          <Cart {...props} 
          loggedInStatus={this.state.loggedInStatus} 
          userID = {this.state.userID}/>
        )}/>

        <Route exact path={"/Login"} render ={props => (
          <Login {...props} 
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          loggedInStatus={this.state.loggedInStatus}
          userID = {this.state.userID}/>
        )}/>
        
       

        <Route exact path={"/OrderHistory"} render ={props => (
          <OrderHistory {...props} 
          loggedInStatus={this.state.loggedInStatus} 
          userID = {this.state.userID}/>
        )}/>

        <Route exact path={"/ProductInfo"} render ={props => (
          <ProductInfo {...props} 
          loggedInStatus={this.state.loggedInStatus} 
          userID = {this.state.userID}/>
        )}/>

        <Route exact path={"/AddressUpdate"} render ={props => (
          <AddressUpdate {...props} 
          loggedInStatus={this.state.loggedInStatus} 
          userID = {this.state.userID}/>
        )}/>
       

      </Switch>
      </BrowserRouter>
    </div>
     
    )
  }
}