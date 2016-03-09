module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || '8080',
  slack: {
    token: process.env.SLACK_TOKEN || 'token'
  }
}
