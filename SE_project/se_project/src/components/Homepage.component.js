import React, { Component } from 'react';
import axios from "axios";

export default class Homepage extends Component{
    constructor(props) {
        super(props);
    
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
      
      }


    handleLogoutClick() {
        let query = "http://localhost:5000/Customer/"+this.state.user._id+"/Update/loggedOut";
        axios
          .post(query)
          .then(response => {
            this.props.handleLogout();
          })
          .catch(error => {
            console.log("logout error", error);
          });
      }
      
      
      
   
    render() {
        return (
        <div> 
            <h1>data {this.props.userID} </h1>
            <h1>Welcome to the Homepage for this e-commerce site! Please go ahead and   
                log in to be able to view product information and order product. Thank you!
            </h1>

            <h1>Status: {this.props.loggedInStatus}</h1>
            
        </div>
      
        )
    }
}