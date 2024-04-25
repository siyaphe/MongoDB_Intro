require("dotenv").config()
//---------------------------allows  .env
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const connectToDb = require('./config/connectToDb.js')
// to pull our mongoose connection into our application
const Note = require("./models/note")
const Dessert = require("./models/dessert")
const Fruit = require("./models/fruit")
const Food = require("./models/food")
const Drink = require("./models/drink")
const User = require("./models/user")


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



app.get('/notes',(req, res)=>{
  res.send("This is the landing page")
})
// We want to establish CRUD routes for our Notes Models

app.get('/notes', async()=>{
  // 1. Get all notes from DB
  // 2. send the notes back as response

  const notes = await Note.find();
  //--------------------------1
  res.json ({notes: notes})
   //--------------------------2 
})
//---------------------------GET all Notes - [Read]
app.get('/notes/:id',async(req, res)=>{
  // 1. get id of the URL
  // 2.find the note assoc with iD
  // 3.Send response with that note as the payload
  const noteId= req.params.id
  const note = await Note.findById(noteId)
  res.json({note: note})
})
//---------------------------GET a specific Note

//---------------------------------------------Read

app.post('/notes',async(req, res)=>{
  console.log(`BODY: ${req.body}`)
  const title = req.body.title
  const body = req.body.body
  // const {title,body} = req.body

  const note = await Note.create({
    title: title,
    body: body
  })
 
})
//---------------------------create a Notes

app.put('/notes/:id',(req, res)=>{
  
})
//---------------------------------------------Update
app.delete('/notes/:id')
//---------------------------------------------Delete
//----------------------------------------------------------------CRUD


// We want to establish CRUD routes for our  Dessert Models
app.get('/desserts', async(req, res)=>{
  const desserts = await Dessert.find()
  res.json({desserts: desserts})
})
//---------------------------------------------GET All Dessert

app.get('/desserts:id', async(req, res)=>{
  const dessertId= req.params.id
  const dessert = await Dessert.findById(dessertId)
  res.json({dessert: dessert})
})
//---------------------------GET a specific dessert

//---------------------------------------------READ

app.post('/desserts',async(req, res)=> {
  console.log(`BODY: ${req.body}`)
  const title = req.body.title
  const body = req.body.body

  const dessert = await Dessert.create({
    title: title,
    body: body
  })
})
//---------------------------create a dessert

app.put('/desserts/:id', (req, res)=>{
  
})
//---------------------------------------------Update
app.delete('/desserts/:id',(req, res) =>{

})
//---------------------------------------------Delete
//---------------------------------------------------------------CRUD


// We want to establish CRUD routes for our Drink Models
app.get('/drinks', async()=>{
  const drinks = await Drinks.find()
  res.json({drinks : drinks})
})
//--------------------------------GET All drinks
app.get('/drinks/:id', async(req, res)=>{
  const drinkId = req.params.id
  const drink = await Drink.findById(drinkId)
  res.json({drink: drink})
})
//---------------------------GET a specific drink

//---------------------------------------------read

app.post('/drinks', async(req, res)=>{
  console.log(`BODY: ${req.body}`)
  const title = req.body.title
  const body = req.body.body

  const drink = await Drink.create({
    title: title,
    body: body
  }) 
})
//---------------------------create all
app.put("/drinks/:id", (req, res)=>{

})
//---------------------------------------------Update
app.delete("/drinks/:id")
//---------------------------------------------Delete
//---------------------------------------------------------------CRUD


// We want to establish CRUD routes for our  Food Models
app.get('/foods', async(req, res)=>{
  const foods = await Foods.find()
  res.json({foods : foods})
})
//-------------------------------------------GET All foods
app.get('/foods/:id',async(req, res)=> {
  const foodId = req.params.Id
  const food = await Food.findById(foodId)
  res.json({food:food})
})
//---------------------------GET a specific food

//---------------------------------------------Read

app.post('/foods', async(req, res)=>{
  console.log(`BODY: ${req.body}`)
  const title = req.body.title
  const body = req.body.body

  const food = await Food.create({
    title: title,
    body: body
})
//---------------------------create a food

app.put('/foods/:id', (req, res)=>{
  
})
//---------------------------------------------Update
app.delete('/foods/:id')
//---------------------------------------------Delete
//------------------------------------------------------------CRUD

// We want to establish CRUD routes for our  Fruit Models
app.get("/fruits",async(req, res)=> {
  const fruits = Fruit.find()
  res.json({fruits: fruits})
})
//---------------------------------------------Read
app.get("/fruits/:id",async(req, res)=> {
  const fruitId = req.params.Id
  const fruit = await Fruit.findById(fruitId)
  res.json({fruit: fruit})

})
// pp.get('/foods/:id',async(req, res)=> {
//   const foodId = req.params.Id
//   const food = await Food.findById(foodId)
//   res.json({food:food})
// })
//---------------------------GET a specific fruits

//---------------------------------------------Read

app.post('/fruits', async(req, res)=>{
  console.log(`BODY: ${req.body}`)
  const title = req.body.title
  const body = req.body.body

  const fruit = await Fruit.create({
    title: title,
    body: body

})
//---------------------------create all fruits

app.put('/fruits/:id', (req, res)=>{})
//---------------------------------------------Update
app.delete('/fruits/:id',(req,res) =>{

} )
//---------------------------------------------Delete
//----------------------------------------------------CRUD

// We want to establish CRUD routes for our  user Models
app.get('/users',async(req, res)=> {
  const users = await User.find()
  res.json({users : users})
})
//---------------------------------------------GET All Users

app.get('/users/:id',async(req,res)=> {
  const userId = req.params.Id
  const user = await User.findById(userId)
  res.json({user: user})



})
//---------------------------GET  a specific user

//---------------------------------------------Create

app.post('/users',async(req,res)=> {
  console.log(`BODY: ${req.body}`)
  const title = req.body.title
  const body = req.body.body
  const user = await User.create({
    title: title,
    body: body
  })

//---------------------------create an users

app.put('/users/:id',(req,res)=> {
  
})
//---------------------------------------------Update
app.delete('/users/:id',(req,res) =>{})
//---------------------------------------------Delete
//----------------------------------------------------CRUD

// We want to establish CRUD routes for our Models4:4345



app.listen(PORT,()=>{
  console.log(`Express server listening on port num: ${PORT}`)
})