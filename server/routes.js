const Ping = require('./handlers/ping')
const Bot = require('./handlers/bot')

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: Ping
  },

  {
    method: 'POST',
    path: '/war',
    handler: Bot
  }
]
