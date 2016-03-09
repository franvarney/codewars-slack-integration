const Hapi = require('hapi')
const Logger = require('@modulus/logger')('index')

const Auth = require('./handlers/auth')
const Config = require('../config')

var server = new Hapi.Server()

server.connection({
  host: process.env.NODE_ENV === 'production' ? null : Config.host,
  port: parseInt(Config.port, 10),
  routes: { cors: true }
})

server.auth.scheme('slack_auth', (server, options) => {
  return { authenticate: Auth.validate }
})

server.auth.strategy('slack_auth', 'slack_auth')

server.start((err) => {
  if (err) {
    Logger.error(`server.start: ${err.message}`)
    throw err
  }

  Logger.info(`Server starting at ${server.info.uri}`)
})

module.exports = server
