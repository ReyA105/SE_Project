import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">E-commerce Shopping</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">

          <li className="navbar-item">
          <Link to="/Products" className="nav-link">Product List</Link>
          </li>
          <li className="navbar-item">
          <Link to="/Customer" className="nav-link">Account Details</Link>
          </li>
          <li className="navbar-item">
          <Link to="/Cart" className="nav-link">Cart</Link>
          </li>
          <li className="navbar-item">
          <Link to="/Checkout" className="nav-link">Checkout</Link>
          </li>

        </ul>
        <ul className = "nav navbar-nav navbar-right">
          <li className="navbar-item">
          <Link to="/LogIn" className="nav-link">Log In/Create Account</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}