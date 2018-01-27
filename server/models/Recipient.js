const mongoose = require('mongoose')
const { Schema } = mongoose

const recipientSchema = new Schema({
  email: String,
  responded: { typ: Boolean, default: false }
})

module.exports = recipientSchema