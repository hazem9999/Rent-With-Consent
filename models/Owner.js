const mongoose= require('mongoose')
const Schema = mongoose.Schema;
const OwnerSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  reviews: {
    type: String,
    required: false
  },
  notification:{
    type: [String],
    required: false
  },
  cars:{
      type: [String],
      required: false
  },
  previousrents:{
    type: Number,
    required: false
  }
});
  module.exports = Owner = mongoose.model('Owner',OwnerSchema);