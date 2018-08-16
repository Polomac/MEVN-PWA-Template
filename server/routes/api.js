import express from 'express';
import Book from '../models/books';

const router = express.Router();

// Request examples
router.get('/books', (req, res) => {
  Book.find({})
  .then((books)=> {
    res.send(books);
  });
});

router.post('/books', (req, res) => {
  // Creating and saving new instance
  Book.create(req.body)
  // Success callback
  .then((book) => {
    res.send(book);
  })
  // Error callback with status set to invalid request
  .catch((e) => {
    res.status(400).send({error: e._message});
  });
});

router.patch('/books/:id', (req, res) => {
  res.send('PATCH');
});

router.delete('/books/:id', (req, res) => {
  res.send('DELETE');
});

// Exporting router
export default router;


