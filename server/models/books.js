import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Defining book model
const BookSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Book title is required'],
  },
  author: {
    type: String,
    required: [true, 'Book author is required'],
  },
});

// Generate book model
const Book = mongoose.model('book', BookSchema);

export default Book;