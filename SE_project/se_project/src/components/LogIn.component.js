import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import CreateUser from './CreateUser.component';
import {BrowserRouter as Router,Route} from "react-router-dom"


export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={
        username:'',
        password:''
        }
       }

    render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
        <Router>
        <nav>
        <Link to = "/CreateUser">CreateUser</Link>
        <Route path ="/CreateUser" exact component = {CreateUser}/>
        </nav>
        </Router>
      </div>
      
    );
  }
}
const style = {
 margin: 15,
}