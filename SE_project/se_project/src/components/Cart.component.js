import React, { Component } from 'react';
import axios from "axios";

const Product = props => (
    <tr>
        <td>{props.product.name}</td>
        <td>{props.product.brand}</td>
        <td>{props.product.color}</td>
        <td>{props.product.weight}</td>
        <td>{props.product.size}</td>
        <td>{props.product.quantity}</td>
        <td>{props.product.price}</td>
    </tr>
)

export default class Cart extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            temps : [],
            products : []
        }
    this.CartList = this.CartList.bind(this);
        
      
    }

    componentDidMount(){
        let query = "http://localhost:5000/Customer/"+this.props.userID+"/Cart"
        axios.get(query).then(res=>{
            this.setState({ temps: Object.values(res.data)})
        })

        query = "http://localhost:5000/Product/";
        axios.get(query).then(res=> this.setState({products:Object.values(res.data)}))
    }

    CartList(){
        console.log(this.state.temps)
        // eslint-disable-next-line
        let maplist = this.state.products.map(currentProduct => {
            console.log(currentProduct._id)
            console.log(this.state.temps)
             if(this.state.temps.includes(currentProduct._id))
             {
                return <Product product={currentProduct} />
             };
        })
        return(maplist)
    }
    render() {
        return (
        <div> 
           
           <h3>Cart</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>name</th>
                  <th>brand</th>
                  <th>color</th>
                  <th>weight</th>
                  <th>size</th>
                  <th>quantity</th>
                  <th>price</th>
                </tr>
              </thead>
              <tbody>
                {this.CartList()}
              </tbody>
            </table>
        </div>
        )
    }
}