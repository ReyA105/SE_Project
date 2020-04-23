import React, { Component } from 'react';
import axios from 'axios';

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

export default class Products extends Component{
    constructor(props)
    {
        super(props);
        this.state = {products: [] }
    }
    componentDidMount(){
            axios.get('http://localhost:5000/product')
            .then(res=>{
                
                const products = res.data;
                console.log(products)
                this.setState({products})
            })

    }

    productList(){
        return this.state.products.map(currentProduct => {
            return <Product product={currentProduct} />;
        })
    }

    render() {
        return (
            <div>
            <h3>Products</h3>
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
                { this.productList() }
              </tbody>
            </table>
          </div>
        )
    }
}