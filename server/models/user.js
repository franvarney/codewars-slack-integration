const Mongoose = require('mongoose')
const Timestamps = require('mongoose-timestamp')

var User = new Mongoose.Schema({
  user: {
    id: { type: String, required: true },
    name: { type: String, required: true }
  },
  team: {
    id: { type: String, required: true },
    name: { type: String, required: true }
  },
  token: { type: String, required: true }
})

User.plugin(Timestamps)

module.exports = Mongoose.model('User', User)
