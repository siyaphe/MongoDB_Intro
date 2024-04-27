const Note = require("../models/note")


const fetchAllNotes = async (req, res) => {
  // 1. Get all notes from DB
  // 2. send the notes back as response

  const notes = await Note.find();
  //--------------------------1
  res.json({ notes: notes });
  //--------------------------2 
}

const fetchNote = async (req, res) => {
  // 1. get id of the URL
  // 2.find the note assoc with iD
  // 3.Send response with that note as the payload
  const noteId = req.params.id;
  const note = await Note.findById(noteId);
  res.json({ note: note });
}


const createNote = async (req, res) => {
  // 1. Get data from the req.body
  // 2. create notes
  // 3. Respond with new copy of note
  console.log(`BODY: ${req.body}`)
  const title = req.body.title;
  const body = req.body.body;
  // const {title,body} = req.body

  const note = await Note.create({
    title: title,
    body: body
  });
  res.json({ note: note });
}


const updatedNote = async (req, res) => {
  // 1. Get the id of the url
  const noteId = req.params.id
  // 2. Get the data of the id
    const {title,body} = req.body
  // 3. find and update the Note
  const note = await Note.findByIdAndUpdate(noteId,{
    title: title,
    body: body
  })
  // 4. Retrieve updatedNote and send it as a response
  const updatedNote = await Note.findById(noteId)
  res.json({note: updatedNote})
}


const deleteNote = async (req, res) => {
  const noteId = req.params.id
  await Note.deleteOne({
    id: noteId
  })
  res.json({success: "Record has been daeleted successfully"})
}


module.exports = {
  fetchAllNotes,
  fetchNote,
  createNote,
  updatedNote,
  deleteNote
}
