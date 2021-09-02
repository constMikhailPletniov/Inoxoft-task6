const Joi = require('joi');

module.exports = {
    pestsCreateValidator: Joi.object({
        clasification: Joi.string().trim().
            alphanum().
            required(),
        name: Joi.string().trim().
            alphanum().
            required(),
        price: Joi.number().
            required(),
        purchase: Joi.number().positive().
            required()
    }),
    pestsUpdateValidator: Joi.object({
        price: Joi.number().positive().
            required(),
        purchase: Joi.number().positive().
            required()
    })
}
