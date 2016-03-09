const Config = require('../../config')

exports.validate = function (request, reply) {
  if (!request.payload.token || request.payload !== Config.slack.token) {
    Logger.error(`auth.validate: ${err.message}`)
    return reply('Cannot be validated. Check your token.');
  }

  return reply.continue({
    credentials: {
      team: {
        id: request.payload.team_id,
        domain: request.payload.team_domain
      },
      user: {
        id: request.payload.user_id,
        name: request.payload.user_name
      }
    }
  })
}
