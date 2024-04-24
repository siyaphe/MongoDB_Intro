const mongoose = required("mongoose")

const foodSchema = new mongoose.Schema({
  title: String,
  body: String
})

const Food = mongoose.model("Food", foodSchema)


module.exports = Food