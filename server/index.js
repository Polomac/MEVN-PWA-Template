import express from 'express';
import bodyParser from'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/api';

const port = 5000;
const app = express();

// Connect to mongodb (port must be specified)
mongoose.connect('mongodb://localhost:27017/books', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

// MIddleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors());


// Initialize routes
app.use('/api/', routes);

// Start server
app.listen(process.env.port || port, () => {
  console.log('It works!');
});