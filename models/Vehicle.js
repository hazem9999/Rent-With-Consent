const mongoose= require('mongoose')
const Schema = mongoose.Schema;
const VehicleSchema = new Schema({
  franchise: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  yearLaunched: {
    type: Number,
    required: true
  },
  CurrentOwner:{
    type: String,
    required: true
  },
  CurrentUser:{
    type: String,
    required: false
  },
  reviews: {
    type: String,
    required: false
  },
  currentlyRented:{
    type: Boolean,
    required: true
  },
  previousrents:{
    type: Number,
    required: false
  },
  milesDriven:{
    type: Number,
    required: false
  },
  CC:{
      type: Number,
      required: true
  },
  horsePower:{
    type: Number,
    required: false
  },
  color:{
    type: String,
    required: true
  },
  tranmission:{
    type: String,
    required: true
  },
  valuePrice:{
    type: String,
    required: false
  },
  rentingPrice:{
    type: String,
    required: true
  },
  location:{
    type: String,
    required: true
  },
  licencePlate:{
    type: String,
    required: true
  }
});
  module.exports = Vehicle = mongoose.model('Vehicle',VehicleSchema);