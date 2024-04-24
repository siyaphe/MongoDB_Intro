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
//--------------------------------------------Requirements



//--------------------------------------------- Routing

// We want to establish CRUD routes for our Note Models

app.get('/notes',{})
//---------------------------GET all Notes
app.get('/notes/:id',{})
//---------------------------GET a specific Note

//---------------------------------------------Read

app.post('/notes',{})
//---------------------------create a Notes

app.put('/notes/:id',{})
//---------------------------------------------Update
app.delete('/notes/:id')
//---------------------------------------------Delete
//----------------------------------------------------------------CRUD

// We want to establish CRUD routes for our  Dessert Models
app.get('/desserts', {})
//---------------------------------------------GET All Dessert

app.get('/desserts:id', {})
//---------------------------GET a specific dessert

//---------------------------------------------READ

app.post('/desserts', {})
//---------------------------create a dessert

app.put('/desserts/:id', {})
//---------------------------------------------Update
app.delete('/desserts/:id')
//---------------------------------------------Delete
//---------------------------------------------------------------CRUD


// We want to establish CRUD routes for our Drink Models
app.get('/drinks', {})
//--------------------------------GET All drinks
app.get('/drinks/:id', {})
//---------------------------GET a specific drink

//---------------------------------------------read

app.post('/drinks', {})
//---------------------------create all
app.put("/drinks/:id", {})
//---------------------------------------------Update
app.delete("/drinks/:id")
//---------------------------------------------Delete
//---------------------------------------------------------------CRUD


// We want to establish CRUD routes for our  Food Models
app.get('/foods', {})
//-------------------------------------------GET All foods
app.get('/foods/:id', {})
//---------------------------GET a specific food

//---------------------------------------------Read

app.post('/foods', {})
//---------------------------create a food

app.put('/foods/:id', {})
//---------------------------------------------Update
app.delete('/foods/:id', {})
//---------------------------------------------Delete
//------------------------------------------------------------CRUD

// We want to establish CRUD routes for our  Fruit Models
app.get('/fruits', {})
//---------------------------------------------Read
app.get('/fruits/:id', {})
//---------------------------GET a specific fruits

//---------------------------------------------Read

app.post('/fruits', {})
//---------------------------create all fruits

app.put('/fruits/:id', {})
//---------------------------------------------Update
app.delete('/fruits/:id')
//---------------------------------------------Delete
//----------------------------------------------------CRUD

// We want to establish CRUD routes for our  user Models
app.get('/users',{})
//---------------------------------------------GET All Users

app.get('/users/:id',{})
//---------------------------GET  a specific user

//---------------------------------------------Create

app.post('/users',{})
//---------------------------create an users

app.put('/users/:id',{})
//---------------------------------------------Update
app.delete('/users/:id')
//---------------------------------------------Delete
//----------------------------------------------------CRUD

// We want to establish CRUD routes for our Models



app.listen(PORT,()=>{
  console.log(`Express server listening on port num: ${PORT}`)
})