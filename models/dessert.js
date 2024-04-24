const mongoose = required("mongoose")

const dessertSchema = new mongoose.Schema({
  title: String,
  body: String
})

const Dessert = mongoose.model("Dessert", dessertSchema)

module.exports = Dessert