const Book = require('../model/dbbooks.js');
const asyncHandler = require("express-async-handler");

const createbook =  (req, res) => {
    const { name, price, email } = req.body;
  
    // Create a new Book instance
    const newBook = new Book({
      name: name,
      price: price,
      email: email
    });
  
    // Save the book to the database
    newBook.save((error, book) => {
      if (error) {
        console.log(error);
        res.send('Error occurred while saving the book');
      } else {
        console.log(book);
        res.send('Form submitted successfully');
      }
    });
  }

  const getbooks = (req, res) => {
    // Fetch data from the database
    Book.find({}, (err, books) => {
      if (err) {
        console.log(err);
        res.send('Error occurred while fetching books');
      } else {
        // Pass the fetched data to the EJS template
        res.render('home', { books: books });
      }
    });
  }

  const deletebooks = asyncHandler((req, res) => {
    const bookId = req.params.id;
  
    Book.findByIdAndDelete(bookId, (error) => {
      if (error) {
        console.log(error);
        res.send('Error occurred while deleting the book');
      } else {
        res.redirect('/books');
      }
    });
  })


  const updatebook = asyncHandler(async (req, res) => {
      const bookId = req.params.id;
      const book = await Book.findById(bookId);
         
      if (!book) {
        res.status(404).send('Book not found');
      }
      const updateBook = await Book.findByIdAndUpdate(
        bookId,req.body,{new:true}
      )
      console.log(book);
      res.json(updateBook); // Send the updated book as a JSON response
     
      res.status(500).send('Error occurred while updating the book');


  });
  
  

  const getbook = asyncHandler(async (req, res)=>{
    const book = await Book.findById(req.params.id);
    if(!book){
        res.status(404);
        throw new Error("Contact Not Found");
    }
    res.status(200).json(book);
})

module.exports = {
  createbook,getbooks,deletebooks,getbook,updatebook
};
