const express = require('express')
const router = express.Router()

const User = require('../../models/User')
const validator = require('../../validations/userValidations')

router.get('/', async (req,res) => {
    const user = await User.find()
    res.json({data: user })
})

router.get('/:id', async (req, res)=>{
    try{
        const userId = req.params.id
        const userElement = await User.findById(userId)
        if(!userElement){
            res.status(404).send({error: 'We can not find what you are looking for'});
        }else{
            res.json({data: userElement})
        }
    }
    catch(error){
        res.status(404).send({error: 'Something went wrong'});
    }
})

router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newUser = await User.create(req.body)
     res.json({data: newUser})
    }
    catch(error) {
        console.log(error)
    }  
 })

 router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const foundUser = await User.findById(id)
     if(!foundUser) return res.status(404).send({error: 'User does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedUser = await User.findByIdAndUpdate(id,req.body)
     res.json({msg: 'User updated successfully'})
    }
    catch(error) {
        res.status(404).send({error: 'Something went wrong'});
    }  
 })

 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedUser = await User.findByIdAndRemove(id)
     res.json({msg:'User was deleted successfully', data: deletedUser})
    }
    catch(error) {
        res.status(404).send({error: 'Something went wrong'});
    }  
 })