import React, { Component } from 'react';
import axios from "axios";
import AddressUpdate from "./AddressUpdate.component"
import OrderHistory from "./OrderHistory.component"
export default class CustomerInfo extends Component{
    constructor(props)
    {
        super(props);
        
        this.state = {
            "FirstName"  : " ",
            "LastName" : " ",
            "streetName" : " ",
            "city": " ",
            "state": " ",
            "zipcode": " "
        }
       
    }

    componentDidMount() {
        let query = "http://localhost:5000/Customer/"+this.props.userID
        axios.get(query).then(res => {
            this.setState({FirstName:res.data.FirstName})
            this.setState({LastName:res.data.LastName})
            this.setState({streetName:res.data.address.streetName})
            this.setState({state:res.data.address.state})
            this.setState({zipcode:res.data.address.zipcode})
            this.setState({city:res.data.address.city})


        })

    }

    render() {
    


        return (
        <div> 
            
            <form>
                <label for="FirstName" >FirstName</label><br/>
                <input name="FirstName" value= {this.state.FirstName} id="FirstName" readOnly/>

                <label for="LastName" >LastName</label><br/>
                <input name="LastName" value= {this.state.LastName} id="LastName" readOnly/>
                <h2>Address Information</h2>
                <label for="StreeName">Street Name </label>
                <input for="StreetName" value= {this.state.streetName} type="text" readOnly/>

                <label for="City">City </label>
                <input for="City" value= {this.state.city} type="text" readOnly/>
                
                <label for="State">State</label>
                <input for="State" value= {this.state.state} type="text" readOnly/>
                 
                <label for="Zipcode">Zipcode </label>
                <input for="Zipcode" value= {this.state.zipcode} type="text" readOnly/>

            </form>
            
            <AddressUpdate userID = {this.props.userID}/>
            <OrderHistory userID = {this.props.userID}/>

            
        </div>
        )
    }
}