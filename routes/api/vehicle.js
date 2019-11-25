const express = require('express');
const router = express.Router();
const Vehicle = require('../../models/Vehicle.js');
const validator = require('../../validations/vehicleValidations.js')

// Get all Vehicle
router.get('/', async (req, res) => {
    const Vehicles = await Vehicle.find();
    res.json({ data: Vehicles })
});
// Create a new Vehicle
router.post('/createVehicle', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newVehicle = await Vehicle.create(req.body)
        res.json({msg:'Vehicle was created successfully', data: newVehicle})
    }
    catch(error) {
        console.log(error)
    }  
 })
// Update a Vehicle
router.put("/update/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const Vehicles = await Vehicle.find({id});
      if (!Vehicles) return res.status(404).send({ error: "Vehicle does not exist" });
      const isValidated = validator.updateValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });
      
      const updatedVehicle = await Vehicle.findOneAndUpdate({_id: id} , req.body);
      res.json({ msg: "Vehicle updated successfully" });
    } catch (error) {
      // We will be handling the error later
      console.log(error);
    }
  });
// delete a certain Vehicle
router.delete('/delete/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedVehicle = await Vehicle.findByIdAndDelete(id);
     res.json({msg:'Vehicle was deleted successfully', data: deletedVehicle})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
module.exports = router;