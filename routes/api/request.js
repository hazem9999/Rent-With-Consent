const express = require("express")
const router = express.Router()
const Request = require("../../models/Request.js")
const validator = require("../../validations/requestsValidations")
//get all requests
router.get("/", async (req, res) => {
  const Requests = await Request.find()
  res.json({ data: Requests })
});

router.get('/accepted', async (req,res) => {
  const Requests = await Request.find({status: 'Accepted'})
  res.json({ data: Requests })
});

router.get('/rejected', async (req,res) => {
  const Requests = await Request.find({status: 'Rejected'})
  res.json({ data: Requests })
});
// search for Request with userID
router.post("/search", async (req, res) => {
  const ID = req.body.userID
  const Requests = await Request.find({ userID: ID })
  res.json({ data: Requests })
});
//delete a request
router.delete('/:id', async (req,res) => {
  try {
   const id = req.params.id
   const deletedRequest = await Request.findByIdAndDelete(id)
   res.json({msg:'Request was deleted successfully', data: deletedRequest})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
});
// get a certin request 
router.get('/:id',async (req, res) => {
  const id = req.params.id
  const requests = await Request.findById(id)  
  if(!requests) return res.status(400).send({error:result.error.details[0].message})
  res.send(requests)
});

//create a new request
router.post('/createRequest', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newRequest = await Request.create(req.body)
        res.json({msg:'Request was created successfully', data: newRequest})
    }
    catch(error) {
        console.log(error)
    }  
 })



//owner accepting or rejecting the request
//ID msut be of an owner
router.put("/acceptrequest/:id", async (req, res) => {
  try {
    const id = req.params.id
    const requests =await Request.find({id})
    if  (!requests) return res.status(404).send({ error: 'request does not exist' })
        const updatedrequests = await request.findOneAndUpdate({_id: id} , {status:'true'})
        res.json({ msg: "Status successfully set" })
      } catch (error) {
        // We will be handling the error later
        console.log(error)
  }
});

router.put("/rejectrequest/:id", async (req, res) => {
  try {
    const id = req.params.id
    const requests =await Request.find({id})
    if  (!requests) return res.status(404).send({ error: 'request does not exist' })
        const updatedrequests = await request.findOneAndUpdate({_id: id} , {status:'false'})
        res.json({ msg: "Status successfully set" })
      } catch (error) {
        // We will be handling the error later
        console.log(error)
  }
})
module.exports = router;