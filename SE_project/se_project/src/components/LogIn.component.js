import React, { Component } from 'react';

import axios from "axios";


export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={
        FirstName:'',
        LastName:'',
        createFirstName: ' ',
        createLastName: ' '
        
        }
        
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeFirstNametwo = this.onChangeFirstNametwo.bind(this);
        this.onChangeLastNametwo = this.onChangeLastNametwo.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmitCreateUser = this.onSubmitCreateUser.bind(this);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);

       } 

    handleSuccessfulAuth(data) {
        this.props.handleLogin(data);
        this.props.history.push("/");
    }

        
    onChangeFirstName(e){
            this.setState({FirstName: e.target.value})
        }

    onChangeLastName(e){
            this.setState({LastName: e.target.value})
        }
    onChangeFirstNametwo(e){
          this.setState({createFirstName: e.target.value})
      }

  onChangeLastNametwo(e){
          this.setState({createLastName: e.target.value})
      }
      

    onSubmit(e){
      e.preventDefault();

      axios.get('http://localhost:5000/Customer/')
            .then(res=> { 
              for(let i=0;i<res.data.length  ; i++){
                
                if(res.data[i].FirstName === this.state.FirstName && res.data[i].LastName === this.state.LastName){
                  console.log(res.data[i]);
                  this.handleSuccessfulAuth(res.data[i])
                }
              }
            }) 
        
    }

    onSubmitCreateUser(e){
      
      e.preventDefault();
      
      const user = {
          FirstName : this.state.createFirstName,
          LastName : this.state.createLastName,
      }
     
      axios.post('http://localhost:5000/Customer/add',user)
      .then(res=>console.log(res.data))
      .then( 
        axios.get('http://localhost:5000/Customer/')
        .then(res=> { 
          for(let i=0;i<res.data.length  ; i++){
            
            if(res.data[i].FirstName === this.state.FirstName && res.data[i].LastName === this.state.LastName){
              console.log(res.data[i]);
              this.handleSuccessfulAuth(res.data[i])
            }
          }
        }) )
      console.log("here")

     

  }


  render() {
    return (
      <div>
        <div>
        <h3>Login Form</h3>
          <form onSubmit={this.onSubmit}> 

              <div className = "form-group">
                  <label>First Name
                      <input type="text" className="form-control" required onChange={this.onChangeFirstName} />
                  </label>
              </div>

              <div className = "form-group">
                  <label>Last Name
                      <input type="text" className="form-control" required onChange={this.onChangeLastName} />
                  </label>
              </div>

              <div className="form-group">
                  <input type="submit" value="Login" className="btn btn-primary" />
              </div>
          </form>
          </div>


        <div>
          <h3>Account Creation Form</h3>
            <form onSubmit={this.onSubmitCreateUser} > 

                <div className = "form-group">
                    <label>First Name
                        <input type="text" className="form-control" required  onChange={this.onChangeFirstNametwo} />
                    </label>
                </div>

                <div className = "form-group">
                    <label>Last Name
                        <input type="text" className="form-control" required  onChange={this.onChangeLastNametwo} />
                    </label>
                </div>

                
                <div className="form-group">
                  <input type="submit" value="Login" className="btn btn-primary" />
              </div>
            </form>
          </div>

      </div>
      
    );
  }
}
