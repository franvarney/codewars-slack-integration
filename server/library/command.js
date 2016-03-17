'use strict'

const Bot = require('./bot')
const User = require('./user')

class Command {
  constructor() {}

  /*
    Command: /codewars token [token]
  */
  token(payload, done) {
    User().setToken(payload, done)
  }

  /*
    Command: /codewars question
  */
  question(payload, done) {
    Bot().getQuestion(payload, done)
  }

  /*
    Command: /codewars attempt [problem-slug] [solution]
  */
  attempt() {}

  /*
    Command: /codewars submit [problem-slug] [solution]
  */
  submit() {}

  /*
    Command: /codewars help
  */
  help() {}
}

module.exports = function () {
  return new Command()
}
