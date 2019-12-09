const mongoose= require('mongoose')
const Schema = mongoose.Schema;
const RequestSchema = new Schema({

  userID: {
    type: String,
    required: false
  },
  ownerID: {
    type: String,
    required: false
  },
  time: {
    type: Date,
    required: false
  },
  duration: {
    type: Number,
    required: false
  },
  isRented:{
    type: Boolean,
    required: true
  },
  vehicleName:{
      type: String,
      required: true
  },
  creditOrCash:{
    type: String,
    required: false
  },
  rentingFee:{
      type: Number,
      required: true
  },
  pickuptime:{
    type: Date,
    required: false
}

});
  module.exports = Request = mongoose.model('Request',RequestSchema);