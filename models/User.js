const mongoose= require('mongoose')
const Schema = mongoose.Schema;
const UserSchema = new Schema({
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
  mobileNumber: {
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
  currentlyRenting:{
    type: Boolean,
    required: true
  },
  car:{
      type: String,
      required: false
  },
  previousRents:{
    type: Number,
    required: false
  },
  creditBalance:{
      type: String,
      required: false
  }
});
  module.exports = User = mongoose.model('User',UserSchema);