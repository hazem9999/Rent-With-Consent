const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            username: Joi.string().required(),
            password: Joi.string().required(),
            name: Joi.string().required(),
            age: Joi.number().required(),
            reviews: Joi.number(),
            notification: Joi.array(),
            cars: Joi.array(),
            previousrents: Joi.number(),
            creditBalance: Joi.number(),
            mobileNumber: Joi.number().required()
        }
        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            username: Joi.string(),
            password: Joi.string(),
            name: Joi.string(),
            age: Joi.number(),
            reviews: Joi.number(),
            notification: Joi.array(),
            cars: Joi.array(),
            previousrents: Joi.number(),
            creditBalance: Joi.number(),
            mobileNumber: Joi.number()
        }
        return Joi.validate(request, updateSchema)
    }, 
}