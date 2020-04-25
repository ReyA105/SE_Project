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
    this.onClickCheckOut = this.onClickCheckOut.bind(this);
      
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
             if(this.state.temps.includes(currentProduct._id))
             {
                return <Product product={currentProduct} />
             };
        })
        return(maplist)
    }
    onClickCheckOut(e){
        e.preventdeafult();
        let pricetotal = 0;
        let currentOrder = this.state.temps;
        
        // eslint-disable-next-line
        this.state.products.map(currentProduct => {
            if(this.state.temps.includes(currentProduct._id))
            {
                pricetotal = currentProduct.price + pricetotal
            };
       })
       console.log(currentOrder)
       console.log(pricetotal)
    //    let query = 'http://localhost:5000/Customer/'+this.props.userID+"/order/add"
    //    axios.post(query,{
    //        "pricetotal": pricetotal,
    //        "currentOrder" : currentOrder
    //    }).then(res =>
    //     {query = 'http://localhost:5000/Customer/'+this.props.userID+"/cart/clear" ;
    //     axios.get(query);}
    //    )

    //    this.props.history.push("/");
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
            <form onSubmit ={this.onClickCheckOut}>
            <div className="form-group">
                  <input type="submit" value="Checkout cart" className="btn btn-primary" />
            </div>
            </form>  
          
        </div>
        )
    }
}