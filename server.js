require("dotenv").config()
//---------------------------allows  .env
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const connectToDb = require('./config/connectToDb.js')
// to pull our mongoose connection into our application

const cors = require('cors')
//------------------------receiving cross origins
app.use(express.json())
// to allow express to convert our data to json
app.use(cors())
//-------------------------------database connection

connectToDb()
// this initializes our connectToDB() function

app.listen(PORT,()=>{
  console.log(`Express server listening on port num: ${PORT}`)
})