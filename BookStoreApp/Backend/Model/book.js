const {bookSchema} = require('../db/db')
const mongoose = require('mongoose');



const Book = mongoose.model('Book',userSchema);


module.exports = Book;