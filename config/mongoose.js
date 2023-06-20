const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ravindrakumarratre6:wshbdwRwgbfgnSZ6@cluster0.foumji2.mongodb.net/books?retryWrites=true&w=majority');
const db =  mongoose.connection;

// Error
db.on('error',console.log.bind(console,'connection error to database'));

db.once('open',function(){
    console.log('Successfully Connect To Database'); 
});



