'use strict'

const User = require('./user')

class Command {
  constructor() {}

  /*
    Command: /codewars token [token]
  */
  token(payload, done) {
    User().setToken(payload, done)
  }
}

module.exports = function () {
  return new Command()
}
