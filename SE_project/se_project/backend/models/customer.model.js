const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    FirstName: {type:String, required:true},
    LastName :  {type:String, required:true},
    orderHistory:  [{
        pricetotal: {type:Number,"minimum":0},
        currentOrders: {type:[String]}
    }],
    Cart: {type:[String]},
    address: {
        streetName: {type: String, default: ' '},
        city :  {type: String, default: ' '},
        state:  {type: String, default: ' '},
        zipcode:  {type: String, default: ' '},
    },
    loggedIn : {type: Boolean, default:false}
}
);

const customer =  mongoose.model('Customer',customerSchema);

module.exports = customer;