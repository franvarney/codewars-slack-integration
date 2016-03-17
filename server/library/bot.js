'use strict'

const Request = require('request')

const Config = require('../../config')
const User = require('./user')

class Bot {
  constructor() {}

  /*
   * Get a new question from codewars.com.
   * @param {object} data - The payload sent from Slack.
   * @return {boolean} body - The question from codewars.com.
  */
  getQuestion(data, done) {
    var query = {
      'team.name': data.team_domain,
      'user.name': data.user_name
    }

    User().getToken(query, (err, token) => {
      if (err) return done(err)

      var apiUrl = 'https://www.codewars.com/api/v1'
      var options = {
        method: 'POST',
        url: `${apiUrl}/code-challenges/${Config.codewars.language}/train`,
        headers: {
          Authorization: Config.codewars.token || token
        },
        qs: {
          strategy: 'random'
        }
      }

      Request(options, (err, response, body) => {
        if (err) return done(err)
        done(null, body)
      })
    })
  }
}

module.exports = function () {
  return new Bot()
}
