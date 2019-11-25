const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            userID: Joi.string().required(),
            ownerID: Joi.string().required(),
            time: Joi.date().required(),
            duration: Joi.number().required(),
            status: Joi.string().required(),
            vehicleID: Joi.string().required(),
            creditOrCash: Joi.string().required(),
            rentingFee: Joi.number().required(),
            pickuptime: Joi.date().required()
        }
        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            userID: Joi.string().required(),
            ownerID: Joi.string().required(),
            time: Joi.date().required(),
            duration: Joi.number().required(),
            status: Joi.string().required(),
            vehicleID: Joi.string().required(),
            creditOrCash: Joi.string().required(),
            rentingFee: Joi.number().required(),
            pickuptime: Joi.date().required()
        }
        return Joi.validate(request, updateSchema)
    }, 
}