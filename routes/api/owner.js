const express = require('express');
const router = express.Router();
const Owner = require('../../models/Owner.js');
const validator = require('../../validations/ownerValidations.js')

// Get all Owners
router.get('/', async (req, res) => {
    const owners = await Owner.find();
    res.json({ data: owners })
});

router.get('/:id', async (req, res)=>{
    try{
        const ownerId = req.params.id
        const ownerElement = await User.findById(ownerId)
        if(!ownerElement){
            res.status(404).send({error: 'We can not find what you are looking for'});
        }else{
            res.json({data: ownerElement})
        }
    }
    catch(error){
        res.status(404).send({error: 'Something went wrong'});
    }
})
// Create a new Owner
router.post('/createOwner', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const u = await Owner.findOne({username: req.body.username})
     if(!u){
        const newOwner = await Owner.create(req.body)
        res.json({msg:'Owner was created successfully', data: newOwner})
      } else {
        res.status(400).send({ error: 'Username already exists' })
      }
    }
    catch(error) {
        console.log(error)
    }  
 })
// Update a Owner
router.put("/update/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const owner = await Owner.find({id});
      if (!owner) return res.status(404).send({ error: "owner does not exist" });
      const isValidated = validator.updateValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });
      
      const updatedOwner = await Owner.findOneAndUpdate({_id: id} , req.body);
      res.json({ msg: "Owner updated successfully" });
    } catch (error) {
      // We will be handling the error later
      console.log(error);
    }
  });
// delete a certain Owner
router.delete('/delete/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedOwner = await Owner.findByIdAndDelete(id);
     res.json({msg:'Member was deleted successfully', data: deletedOwner})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
module.exports = router;