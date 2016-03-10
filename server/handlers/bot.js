const Logger = require('@modulus/logger')('server:handlers:bot')

const Command = require('../library/command')
const Response = require('../helpers/slack-response')

module.exports = function (request, reply) {
  Logger.debug(`Incoming data ${JSON.stringify(request.payload)}`)

  var command = request.payload.text.split(' ')

  switch(command[0]) {
    case 'token':
      Command().token(request.payload, (err) => {
        if (err) {
          Logger.error(`commmands.token ${err.message}`)
          return reply(Response.ephemeral(err.message))
        }

        return reply(Response.ephemeral('Successfully set token!'))
      })
      break;
  }
}
