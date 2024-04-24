// Schema: we create a blueprint for the model so we can export that format to our EXPRESS SERVER and eventually link it to our routes {CRUD operation}

const mongoose = require("mongoose")
//----------------Models
const noteSchema = new mongoose.Schema({
  title: String,
  body: String
})

const Note = mongoose.model("Note", noteSchema)

module.exports = Note


//-----------------------------------------------