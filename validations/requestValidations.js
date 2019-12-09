const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            userID: Joi.string(),
            ownerID: Joi.string(),
            time: Joi.date(),
            duration: Joi.number(),
            isRented: Joi.boolean().required(),
            vehicleName: Joi.string().required(),
            creditOrCash: Joi.string(),
            rentingFee: Joi.number().required(),
            pickuptime: Joi.date()
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