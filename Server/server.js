const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');
const { readFromFile, readAndAppend, writeToFile } = require('./helpers/fsUtils');

const PORT = 3001;

const app = express();
app.use(clog);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/api', api);
app.use(express.static(path.join(__dirname,'../Client/public/')));

// GET Route for homepage

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../Client/public/index.html'))
);

app.get('/notes.html',(req,res)=>{
    res.sendFile(path.join(__dirname,"../Client/public/notes.html"))
});

app.get("/api/notes",(req,res)=>{
  
  readFromFile('./db/db.json')
  .then((data) => {
    console.log(JSON.parse(data));
    res.json(JSON.parse(data))
  });
});

const server = app.listen(process.env.PORT || 5000, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});