'use strict'

const Base = require('./base')
const UserModel = require('../models/user')
const UserSchema = require('../schemas/user')

/**
 * Class representing a user.
 * @class
*/
class User extends Base {
  constructor() {
    super(UserSchema)
  }

  /*
   * Get a user
   * @private
   * @param {object} query - An object with properties to search by.
   * @return {object} user - An instance of UserModel.
  */
  _get(query, done) {
    UserModel.findOne(query, (err, user) => {
      if (err) return done(err)
      done(null, user)
    })
  }

  /*
   * Set a user's token.
   * @param {object} data - The payload sent from Slack.
   * @return {object} An instance of UserModel.
  */
  setToken(data, done) {
    var text = data.text.split(' ')

    var user = {
      user: {
        id: data.user_id,
        name: data.user_name
      },
      team: {
        id: data.team_id,
        name: data.team_domain
      },
      token: text[1] || undefined // `undefined` if no token sent, fails validation
    }

    this._validate(user, (err, validated) => {
      if (err) return done(err)

      var query = {
        'team.name': data.team_domain,
        'user.name': data.user_name
      }

      this._get(query, (err, user) => {
        if (err) return done(err)

        if (user) {
          UserModel.update(query,
            { token: validated.token },
            (err, updated) => {
              if (err) return done(err)
              done(null, updated)
            })
        } else {
          var user = new UserModel(validated)
          user.save((err, created) => {
            if (err) return done(err)
            done(null, created)
          })
        }
      })
    })
  }
}

module.exports = function () {
  return new User()
}
