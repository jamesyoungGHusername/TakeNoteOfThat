const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
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

notes.delete('/:id',(req,res)=>{
  if(req.params.id){
    readFromFile('./db/db.json')
    .then((data) => {
      let parsed = JSON.parse(data);
      let i = 0;
      while(i<parsed.length){
        if(req.params.id == parsed[i].id){
          break;
        }
        i++;
      }
      parsed.splice(i,1);
      writeToFile('./db/db.json',parsed);
      res.json(`Note deleted`);
  });
  }else{
    res.error('Error in deleting note');
  }
  
});

notes.post('/', (req, res) => {
  console.log(req.body);
    if (req.body) {
      const newNote = new Note(req.body.title,req.body.text,uuid());
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added`);
    } else {
      res.error('Error in adding note');
    }
  });

class Note{
  constructor(title,text,id){
    this.text=text;
    this.title=title;
    this.id=id;
  }
}

  module.exports = notes;