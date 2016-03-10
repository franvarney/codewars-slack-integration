const Joi = require('joi')

module.exports = Joi.object().keys({
  user: {
    id: Joi.string().required(),
    name: Joi.string().required()
  },
  team: {
    id: Joi.string().required(),
    name: Joi.string().required()
  },
  token: Joi.string().required()
})
