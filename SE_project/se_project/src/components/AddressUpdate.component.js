import React, { Component } from 'react';

export default class AddressUpdate extends Component{
    constructor(props)
    {
        super(props);

        this.onChangeStreetName = this.onChangeStreetName.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeZipcode = this.onChangeZipcode.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            streetName: '',
            city: ' ',
            state: ' ',
            zipcode: ' ',

        }
    }

    onChangeCity(e){
        this.setState({ city: e.target.value })
    }
    onChangeState(e){
        this.setState({state: e.target.value})
    }
    onChangeStreetName(event){
        this.setState({streetName: event.target.value})
    }
    onChangeZipcode(e){
        this.setState({zipcode: e.target.value})
    }



    onSubmit(e){
        e.preventDefault();

        const address ={
                streetName : this.state.streetName,
                city : this.state.city,
                state: this.state.state,
                zipcode: this.state.zipcode
        }
        console.log(address)

        //axios post

       // window.location = '/'

    }
    render() {
        return (
         <div>
             <h3>Update Address Form</h3>

             <form onSubmit={this.onSubmit}> 
                <div className = "form-group">
                    <label>Street Name
                        <input type="text" className="form-control" required  onChange={this.onChangeStreetName} />
                    </label>
                </div>
                <div className = "form-group">
                    <label>City
                        <input type="text" className="form-control" required  onChange={this.onChangeCity} />
                    </label>
                </div>
                <div className = "form-group">
                    <label>State
                        <input type="text" className="form-control" required  onChange={this.onChangeState} />
                    </label>
                </div>
                <div className = "form-group">
                    <label>Zipcode
                        <input type="text" className="form-control" required  onChange={this.onChangeZipcode} />
                    </label>
                </div>
                <div className="form-group">
                    <input type="submit" value="Update Address" className="btn btn-primary" />
                </div>
            </form>
         </div>
        )
    }
}