const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');

const PORT = 3001;

const app = express();
app.use(clog);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(express.static('../Client/public/'));

// GET Route for homepage

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../Client/public/index.html'))
);
app.get('/notes.html',(req,res)=>{
    res.sendFile(path.join(__dirname,"../Client/public/notes.html"))
});

app.listen(process.env.PORT || 3000);