const mongoose = require("mongoose")

const fruitSchema = mongoose.Schema({
  title: String,
  body: String

})

const Fruit = mongoose.model("Fruit", fruitSchema)

module.exports = Fruit