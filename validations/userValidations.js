const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            username: Joi.string().required(),
            password: Joi.string().required(),
            name: Joi.string().required(),
            age: Joi.number().required(),
            mobileNumber: Joi.number().required(),
            reviews: Joi.string(),
            notification: Joi.array(),
            currentlyRenting: Joi.boolean().required(),
            car: Joi.string(),
            previousRents: Joi.string(),
            creditBalance: Joi.number(),
            driverLicense: Joi.string().required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            username: Joi.string(),
            password: Joi.string(),
            name: Joi.string(),
            age: Joi.number(),
            mobileNumber: Joi.number(),
            reviews: Joi.string(),
            notification: Joi.array(),
            currentlyRenting: Joi.boolean(),
            car: Joi.string(),
            previousRents: Joi.string(),
            creditBalance: Joi.number(),
            driverLicense: Joi.string()
        }

        return Joi.validate(request, updateSchema)
    }, 
}