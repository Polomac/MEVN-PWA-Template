import express from 'express';
import Book from '../models/books';

const router = express.Router();

// Request routes

// GET All books
router.get('/books', (req, res) => {
  Book.find({})
  .then((books)=> {
    res.send(books);
  });
});

// POST new book
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

// UPDATE
router.put('/books/:id', function(req, res){
  // Finding and updating
  Book.findByIdAndUpdate({_id: req.body.params._id}, req.body.params)
    .then(() => {
      res.send('Success');
    })
    .catch((e) => {
      res.status(418).send({
        error: req.params,
      })
    });
});

// DELETE
router.delete('/books/:id', (req, res) => {
  Book.remove({
    _id: req.params.id
  })
  .then(() => {
    res.send('Success')
  })
  .catch((e) => {
    res.status(418).send({error: e.message})
  });
});

// Exporting router
export default router;
