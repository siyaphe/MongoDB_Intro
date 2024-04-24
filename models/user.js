const mongoose = required("mongoose")
const userSchema = new mongoose.Schema({
  title: String,
  body: String
})

const User = mongoose.model("User", userSchema)

module.exports = User