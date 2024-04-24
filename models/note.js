// models are representation of our data
// schema: we create a struture of properties associated with model


const mongoose = require("mongoose")

//----------------Models
const noteSchema = new mongoose.Schema({
  title: String,
  body: String
})

const Note = mongoose.model("Note", noteSchema)

module.exports = Note