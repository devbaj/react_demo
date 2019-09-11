const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/products', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

var ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'product name required'],
    minlength: 3,
  },
  price: {
    type: Number,
    required: [true, 'product price required'],
    minlength: 3,
    min: 1,
  },
  imageURL: {
    type: String
  },
},
  {timestamps: true}
);

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;