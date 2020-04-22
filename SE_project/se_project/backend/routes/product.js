const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req, res) => {
    Product.find()
      .then(product => res.json(product))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/add').post((req, res) => {
    const name = req.body.name
    const brand = req.body.brand;
    const color = req.body.color;
    const weight = req.body.weight;
    const size = req.body.size;
    const quantity = req.body.quantity;
    const price = Number(req.body.price);
  
    const newProduct = new Product({
      name,
      brand,
      color,
      weight,
      size,
      color,
      quantity,
      price,
    });
  
    newProduct.save()
    .then(() => res.json('Product added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').get((req, res) => {
    Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));
  }); 

 
  router.route('/:id/update').post((req, res) => {
    Product.findById(req.params.id)
    .then(product => {
        product.name = req.body.name;
        product.brand = req.body.brand;
        product.color = req.body.color;
        product.weight = req.body.weight;
        product.size = req.body.size;
        product.quantity = req.body.quantity;
        product.price = Number(req.body.price);
  
        product.save()
          .then(() => res.json('Product updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));

      
  });

  router.route('/:id/delete').delete((req, res) => {
      Product.findByIdAndDelete(req.params.id)
      .then(() => res.json('Product deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  module.exports = router;