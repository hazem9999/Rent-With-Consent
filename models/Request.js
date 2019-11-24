const mongoose= require('mongoose')
const Schema = mongoose.Schema;
const RequestSchema = new Schema({

  userID: {
    type: String,
    required: true
  },
  ownerID: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  status:{
    type: String,
    required: true
  },
  vehicleID:{
      type: String,
      required: true
  },
  creditOrCash:{
    type: String,
    required: true
  },
  rentingFee:{
      type: String,
      required: true
  },
  pickuptime:{
    type: Date,
    required: true
}

});
  module.exports = Request = mongoose.model('Request',RequestSchema);