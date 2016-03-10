'use strict'

const Joi = require('joi')

/**
 * A base class.
 * @class
*/
class Base {
  constructor(schema) {
    this.schema = schema
  }

  /*
   * Validate input with schema provided by each class.
   * @private
   * @param {object} data - The payload sent from Slack.
   * @return {object} A validated schema.
  */
  _validate(data, done) {
    Joi.validate(data, this.schema, done)
  }
}

module.exports = Base
