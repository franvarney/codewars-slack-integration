const Ping = require('./handlers/ping')

module.exports = [
  { method: 'GET',
    path: '/',
    handler: Ping
  }
]
