// app.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 2000;
// Import Mongoose configuration
const db = require('./config/mongoose');


// Import Book model
const Book = require('./model/dbbooks');
const { getbooks} = require('./controller/bookcontroller');

// Set the view engine to render HTML files
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Home route
app.get("/", getbooks);

app.use('/api/books/',require("./router/bookrouter.js"))
// Process form submission
// app.post('/process_form',createbook);

// app.delete("/books/:id",deletebooks)
// Start the server
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log('Server is running on port:', port);
});
