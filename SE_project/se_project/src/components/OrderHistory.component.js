import React, { Component } from 'react';
import axios from "axios";

const Order= props => (
    <tr>
        <td>{props.order._id}</td>
        <td>{props.order.pricetotal}</td>

    </tr>
)

export default class OrderHistory extends Component{
    constructor(props){
        super(props);
        this.state= {
            order : []
        }
    } 
    componentDidMount(){
        let query = "http://localhost:5000/Customer/"+this.props.userID+"/order/"
        axios.get(query).then(res=>{
            this.setState({order:Object.values(res.data)})
        })

    }

    productList(){
        console.log(this.state.order)
        return this.state.order.map(currentOrder => {
            return <Order order={currentOrder} />;
        })
    }

    render() {
        return (
            <div>
            <h3>OrderHistory</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>OrderID</th>
                  <th>Total Price </th>
                  
                </tr>
              </thead>
              <tbody>
                { this.productList() }
              </tbody>
            </table>
          </div>
        )
    }
}