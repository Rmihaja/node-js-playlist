/* eslint-disable no-console */

const express = require('express');
const todoController = require('./controllers/todoController');

const app = express();

// setting up view engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// fire controllers
todoController(app);

// listen to port
app.listen(3000);
console.log('App is listening to port 3000');
