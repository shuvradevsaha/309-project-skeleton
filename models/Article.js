var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name required'
  },

 description: {
    type: String,
    default: '',
    trim: true,
   

  },
   price: {
    type: Number,
    trim: true,
     default: '1',
   required: 'Quantity required'

  },

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Product = mongoose.model('Article', ProductSchema, 'products');
module.exports = Article;
