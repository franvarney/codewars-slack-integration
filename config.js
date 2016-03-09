module.exports = {
  host: process.env.HOST || 'localhost',
  mongo: {
    url: process.env.MONGO_URL || 'mongodb://localhost:27017/CodeWars'
  },
  port: process.env.PORT || '8080',
  slack: {
    token: process.env.SLACK_TOKEN || 'token'
  }
}
