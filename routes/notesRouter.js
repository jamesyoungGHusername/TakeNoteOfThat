const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
  console.log("in api get notes")
  readFromFile('./db/db.json')
  .then((data) => {
    console.log(JSON.parse(data));
    res.json(JSON.parse(data))
  });
});

notes.delete('/:id',(rec,res)=>{
  readFromFile('./db/db.json')
  .then((data) => {
    console.log(JSON.parse(data));
    for(const note of data){
      console.log(note.id);
    }
  });
});

notes.post('/', (req, res) => {
    const { username, topic, tip } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        id: uuid(),
      };
  
      readAndAppend(newTip, './db/db.json');
      res.json(`Note added`);
    } else {
      res.error('Error in adding note');
    }
  });

  module.exports = notes;