const Joi = require('joi');

module.exports.productSchema = Joi.object({
    product : Joi.object({
        name: Joi.string().required(),
        category: Joi.string().required(),
        brand: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.string().required(),
        stock: Joi.string().required(),
        image: Joi.string().allow("", null),
    }).required()
});




