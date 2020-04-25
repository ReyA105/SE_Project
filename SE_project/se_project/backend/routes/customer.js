const router = require('express').Router();
let Customer = require('../models/customer.model');
let Product = require('../models/product.model');


router.route('/').get((req, res) => {
    Customer.find()
      .then(customer => res.json(customer))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/add').post((req, res) => {
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
  
    const newCustomer = new Customer({
     FirstName,
     LastName,
    });
  
    newCustomer.save()
    .then(customer => res.json(customer))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:_id').get((req, res) => {
    Customer.findById(req.params._id)
      .then(customer => res.json(customer))
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.route('/:_id/Update/loggedIn').post((req, res) => {
    Customer.findByIdAndUpdate({_id:req.params._id},{loggedIn: true})
    .catch(err => res.status(400).json('Error: ' + err));

    Customer.findById(req.params._id)
      .then(customer => res.json(customer))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:_id/Update/loggedOut').post((req, res) => {
    Customer.findByIdAndUpdate({_id:req.params._id},{loggedIn: false})
    .catch(err => res.status(400).json('Error: ' + err));

    Customer.findById(req.params._id)
      .then(customer => res.json(customer))
      .catch(err => res.status(400).json('Error: ' + err));
  });



  router.route('/:_id/order/').get((req, res) => {
    Customer.findById(req.params._id)
    .then(customer=> res.json(customer.orderHistory))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:_id/order/add/').post((req, res) => {
      let tempprice = req.body.pricetotal;
      let tempcurrentOrder = req.body.currentOrder;
      let temporderHistory = {
            "pricetotal":tempprice,
            "currentOrders": tempcurrentOrder
        }
      Customer.updateOne({_id:req.params._id},
        {$push : { "orderHistory" : temporderHistory}}).then(res.json("Order Added to History!"))
  
  });


  router.route('/:_id/address/').get((req, res) => {
    Customer.findById(req.params._id)
    .then(customer=> res.json(customer.address))
    .catch(err => res.status(400).json('Error: ' + err));
     
  });
 
  router.route('/:_id/address/update').post((req, res) => {

    Customer.findById(req.params._id).then(customer => {
        customer.address.streetName = req.body.address.streetName;
        customer.address.city = req.body.address.city;
        customer.address.state = req.body.address.state;
        customer.address.zipcode = req.body.address.zipcode;
         
        customer.save()
        .then(() => res.json('Address updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
  });






  router.route('/:_id/cart/').get((req, res) => {
    Customer.findById(req.params._id)
    .then(customer=> res.json(customer.Cart))
    .catch(err => res.status(400).json('Error: ' + err));     
  });

  router.route('/:_id/cart/add').post((req, res) => {
    Customer.updateOne({_id:req.params._id},
          {$push : { "Cart" : req.body.Cart}})
          .then(res.json("Added Product In Cart"))
          .catch(err => res.status(400).json('Error: ' + err));

  });

  router.route('/:_id/cart/clear').post((req, res) => {
    Customer.updateOne({_id:req.params._id},
          {$set : { "Cart" : []}})
          .then(res.json("Cart Cleared"))
          .catch(err => res.status(400).json('Error: ' + err));
     
  });
  
  router.route('/:_id/cart/delete').post((req, res) => {
    Customer.updateOne({_id:req.params._id},
      {$pull : { "Cart" : req.body.Cart}})
      .then(res.json("Deleted Product from Cart"))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  module.exports = router;