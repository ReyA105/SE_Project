import React, { Component } from 'react';


export default class CustomerInfo extends Component{
    render() {
    


        return (
        <div> 
            
            <form>
                <label for="FirstName" >FirstName</label><br/>
                <input name="FirstName" id="FirstName" readOnly/>

                <label for="LastName" >LastName</label><br/>
                <input name="LastName" id="LastName" readOnly/>
                <h2>Address Information</h2>
                <label for="StreeName">Street Name </label>
                <input for="StreetName" type="text" readOnly/>

                <label for="City">City </label>
                <input for="City" type="text" readOnly/>
                
                <label for="State">State</label>
                <input for="State" type="text" readOnly/>
                 
                <label for="Zipcode">Zipcode </label>
                <input for="Zipcode" type="text" readOnly/>

            </form>
            <form action = "/AddressUpdate">
                <button type="submit">Click here to update your address</button>
            </form>
            <form action = "/OrderHistory">
                <button type="submit">Order History</button>
            </form>

            
        </div>
        )
    }
}