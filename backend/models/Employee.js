const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    name: String,
    role: String,
    skills: [String],
  });


  module.exports = mongoose.model('Employee', employeeSchema)