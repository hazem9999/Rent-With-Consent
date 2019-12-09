const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            franchise: Joi.string().required(),
            model: Joi.string().required(),
            yearLaunched: Joi.number().required(),
            CurrentOwner: Joi.string().required(),
            CurrentUser: Joi.string(),
            reviews: Joi.string(),
            currentlyRented: Joi.boolean().required(),
            previousrents: Joi.number(),
            milesDriven: Joi.number(),
            CC: Joi.number().required(),
            horsePower: Joi.number(),
            color: Joi.string().required(),
            tranmission: Joi.string().required(),
            valuePrice: Joi.number(),
            rentingPrice: Joi.number().required(),
            location: Joi.string().required(),
            licencePlate: Joi.string().required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            franchise: Joi.string().required(),
            model: Joi.string().required(),
            yearLaunched: Joi.number().required(),
            CurrentOwner: Joi.string().required(),
            CurrentUser: Joi.string(),
            reviews: Joi.string(),
            currentlyRented: Joi.boolean().required(),
            previousrents: Joi.number(),
            milesDriven: Joi.number(),
            CC: Joi.number().required(),
            horsePower: Joi.number(),
            color: Joi.string().required(),
            tranmission: Joi.string().required(),
            valuePrice: Joi.number(),
            rentingPrice: Joi.number().required(),
            location: Joi.string().required(),
            licencePlate: Joi.string().required()
        }

        return Joi.validate(request, updateSchema)
    }, 
}