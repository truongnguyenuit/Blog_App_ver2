const mongoose = require('mongoose')
const schema = mongoose.Schema

const UserSchema = new schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    default
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('users', UserSchema)