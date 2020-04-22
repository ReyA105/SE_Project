import React, { Component } from 'react';

export default class CreateUser extends Component{
    constructor(props)
        {
            super(props);
    
            this.onChangeFirstName = this.onChangeFirstName.bind(this);
            this.onChangeLastName = this.onChangeLastName.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
            this.state= {
              FirstName : ' ',
              LastName :' '
            }
        }
        
        onChangeFirstName(e){
            this.setState({FirstName: e.target.value})
        }

        onChangeLastName(e){
            this.setState({LastName: e.target.value})
        }
        
        onSubmit(e){
            e.preventDefault();
            const user = {
                FirstName : this.state.FirstName,
                LastName : this.state.LastName,
            }
            console.log(user)
        }
    render() {
        return (
        <div> 
            <h3>Account Creation Form</h3>
            <form onSubmit={this.onSubmit}> 

                <div className = "form-group">
                    <label>First Name
                        <input type="text" className="form-control" required  onChange={this.onChangeFirstName} />
                    </label>
                </div>

                <div className = "form-group">
                    <label>Last Name
                        <input type="text" className="form-control" required  onChange={this.onChangeLastName} />
                    </label>
                </div>

                <div className="form-group">
                    <input type="submit" value="Create Account" className="btn btn-primary" />
                </div>
            </form>
        </div>
        )
    }
}