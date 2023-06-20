const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({ 
  book_id:{type:mongoose.Schema.Types.ObjectId,ref:"books"},
  name: { type: String, required: true },
  price: { type: Number, required: true },
  email: { type: String, required: true }
});

module.exports = mongoose.model('Book', bookSchema);
