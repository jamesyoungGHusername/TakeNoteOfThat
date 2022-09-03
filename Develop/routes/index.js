const express = require('express');

// Import custom middleware
const { clog } = require('../middleware/clog');

const notesRouter = require('./notesRouter');

const app = express();
app.use('/notes',notesRouter);

app.use(clog);

module.exports = app;
