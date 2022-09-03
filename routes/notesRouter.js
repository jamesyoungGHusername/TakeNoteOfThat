const tips = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the tips
tips.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

tips.post('/', (req, res) => {
    const { username, topic, tip } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        note_id: uuid(),
      };
  
      readAndAppend(newTip, './db/db.json');
      res.json(`Note added`);
    } else {
      res.error('Error in adding note');
    }
  });