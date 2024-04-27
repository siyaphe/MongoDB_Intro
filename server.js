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
const notesController = require('./controllers/notesController.js')

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

app.get('/', (req, res) => {
  res.send("This is the landing page");
});
// We want to establish CRUD routes for our Notes Models

app.get('/notes', notesController.fetchAllNotes);

//---------------------------GET all Notes - [Read]
app.get('/notes/:id', notesController.fetchNote);
//---------------------------GET a specific Note

//---------------------------------------------Read

app.post('/notes', notesController.createNote);
//---------------------------create a Notes

app.put('/notes/:id', notesController.updatedNote);
// //---------------------------------------------Update
app.delete('/notes/:id', notesController.deleteNote);
//---------------------------------------------Delete
//----------------------------------------------------------------CRUD


// We want to establish CRUD routes for our  Dessert Models
app.get('/desserts', async (req, res) => {
  const desserts = await Dessert.find();
  res.json({ desserts: desserts });
});
//---------------------------------------------GET All Dessert

app.get('/desserts:id', async (req, res) => {
  const dessertId = req.params.id;
  const dessert = await Dessert.findById(dessertId);
  res.json({ dessert: dessert });
});
//---------------------------GET a specific dessert

//---------------------------------------------READ

app.post('/desserts', async (req, res) => {
  console.log(`BODY: ${req.body}`)
  const title = req.body.title;
  const body = req.body.body;

  const dessert = await Dessert.create({
    title: title,
    body: body
  });
  res.json({ dessert: dessert });
});
//---------------------------create a dessert

app.put('/desserts/:id', async (req, res) => {
// 1. Get the id of the url
const dessertId = req.params.id
// 2. Get the data of the id
  const {title,body} = req.body
// 3. find and update the Note
const updatedNote = await Dessert.findByIdAndUpdate(dessertId,{
  title: title,
  body: body
})
// 4. Retrieve updatedNote and send it as a response
res.json({dessert: updatedDessert})
});
// //---------------------------------------------Update
app.delete('/desserts/:id', async (req, res) => {
  const dessertId = req.params.id
  await Dessert.deleteOne({
    id: dessertIdId
  })
  res.json({success: "Record has been daeleted successfully"})
});
//---------------------------------------------Delete
//---------------------------------------------------------------CRUD


// // We want to establish CRUD routes for our Drink Models
app.get('/drinks', async (req, res) => {
  const drinks = await Drink.find();
  res.json({ drinks: drinks });
});
//--------------------------------GET All drinks
app.get('/drinks/:id', async (req, res) => {
  const drinkId = req.params.id;
  const drink = await Drink.findById(drinkId);
  res.json({ drink: drink });
});
//---------------------------GET a specific drink

//---------------------------------------------read

app.post('/drinks', async (req, res) => {
  console.log(`BODY: ${req.body}`)
  const title = req.body.title;
  const body = req.body.body;

  const drink = await Drink.create({
    title: title,
    body: body
  });
  res.json({ drink: drink });
});
//---------------------------create all
app.put("/drinks/:id", async(req, res) => {
  // 1. Get the id of the url
const drinkId = req.params.id
// 2. Get the data of the id
  const {title,body} = req.body
// 3. find and update the drink
const updatedDrink = await Drink.findByIdAndUpdate(drinkId,{
  title: title,
  body: body
})
// 4. Retrieve updatedNote and send it as a response
res.json({drink: updatedDrink})
});
// //---------------------------------------------Update
app.delete("/drinks/:id", async(req, res)=>{
  const drinkId = req.params.id
  await Drink.deleteOne({
    id: drinkId
  })
  res.json({success: "Record has been daeleted successfully"})
} );
//---------------------------------------------Delete
//---------------------------------------------------------------CRUD


// We want to establish CRUD routes for our  Food Models
app.get('/foods', async (req, res) => {
  const foods = await Food.find();
  res.json({ foods: foods });
});
//-------------------------------------------GET All foods
app.get('/foods/:id', async (req, res) => {
  const foodId = req.params.id;
  const food = await Food.findById(foodId);
  res.json({ food: food });
});
//---------------------------GET a specific food

//---------------------------------------------Read

app.post('/foods', async (req, res) => {
  console.log(`BODY: ${req.body}`)
  const title = req.body.title;
  const body = req.body.body;

  const food = await Food.create({
    title: title,
    body: body
  });
  res.json({ food: food});
});
//---------------------------create a food

app.put('/foods/:id', async (req, res) => {
  // 1. Get the id of the url
const foodId = req.params.id
// 2. Get the data of the id
  const {title,body} = req.body
// 3. find and update the Note
const updatedFood = await Food.findByIdAndUpdate(foodId,{
  title: title,
  body: body
})
// 4. Retrieve updatedNote and send it as a response
res.json({food: updatedFood})
});
//---------------------------------------------Update
app.delete('/foods/:id', async (req, res) => {
  const foodId = req.params.id
  await Food.deleteOne({
    id: foodId
  })
  res.json({success: "Record has been daeleted successfully"})
});
//---------------------------------------------Delete
//------------------------------------------------------------CRUD

// We want to establish CRUD routes for our  Fruit Models
app.get("/fruits", async (req, res) => {
  const fruits = await Fruit.find();
  res.json({ fruits: fruits });
});
//---------------------------------------------Read
app.get("/fruits/:id", async (req, res) => {
  const fruitId = req.params.id;
  const fruit = await Fruit.findById(fruitId);
  res.json({ fruit: fruit });
});


//---------------------------GET a specific fruits

//---------------------------------------------Read

app.post('/fruits', async (req, res) => {
  console.log(`BODY: ${req.body}`);
  const title = req.body.title;
  const body = req.body.body;

  const fruit = await Fruit.create({
    title: title,
    body: body
  });
  res.json({ fruit: fruit });
});
//---------------------------create all fruits

app.put('/fruits/:id', async (req, res) => {
  // 1. Get the id of the url
const fruitId = req.params.id
// 2. Get the data of the id
  const {title,body} = req.body
// 3. find and update the fruit
const updatedFruit = await Fruit.findByIdAndUpdate(fruitId,{
  title: title,
  body: body
})
// 4. Retrieve updatedNote and send it as a response
res.json({fruit: updatedFruit})
});
//---------------------------------------------Update
app.delete('/fruits/:id', async (req, res) => {
  const fruitId = req.params.id
  await Fruit.deleteOne({
    id: fruitId
  })
  res.json({success: "Record has been daeleted successfully"})
});

//---------------------------------------------Delete
//----------------------------------------------------CRUD

// We want to establish CRUD routes for our  user Models
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json({ users: users})
})
// //---------------------------------------------GET All Users
app.get('/users/:id',async(req,res)=> {
  const userId = req.params.id
  const user = await User.findById(userId)
  res.json({user: user})
})
// //---------------------------GET  a specific user

// //---------------------------------------------Create
app.post('/users',async(req,res)=> {
  console.log(`BODY: ${req.body}`)
  const title = req.body.title
  const body = req.body.body
  const user = await User.create({
    title: title,
    body: body
  });
  res.json({ user: user});
});
// //---------------------------create an users

app.put('/users/:id',async(req,res)=> {
  // 1. Get the id of the url
const userId = req.params.id
// 2. Get the data of the id
  const {title,body} = req.body
// 3. find and update the Note
const updatedUser = await User.findByIdAndUpdate(userId,{
  title: title,
  body: body
})
// 4. Retrieve updatedNote and send it as a response
res.json({user: updatedUser})
})
// //---------------------------------------------Update
app.delete('/users/:id', async(req,res) =>{
  const userId = req.params.id
  await User.deleteOne({
    id: userId
  })
  res.json({success: "Record has been daeleted successfully"})
})
// //---------------------------------------------Delete
// //----------------------------------------------------CRUD

app.listen(PORT,()=>{
  console.log(`Express server listening on port num: ${PORT}`);
})