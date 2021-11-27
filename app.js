require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const { errors } = require('celebrate');
const authRouther = require('./routes/auth');
const userRouter = require('./routes/users');
const movieRouter = require('./routes/movies');
const auth = require('./middlewares/auth');
const error = require('./middlewares/error');
const limiter = require('./middlewares/limiter');
// const cors = require('./middlewares/cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const NotFoundError = require('./utils/NotFoundError');

const corsOptions = {
  origin: [
    'https://api.movies-timtorshin.nomoredomains.monster',
    'http://api.movies-timtorshin.nomoredomains.monster',
    'https://movies-timtorshin.nomoredomains.rocks',
    'http://movies-timtorshin.nomoredomains.rocks',
    'https://localhost:3000',
    'http://localhost:3000',
    'localhost:3000',
  ],
  credentials: true,
  preflightContinue: false,
  method: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'origin', 'Authorization', 'Accept'],
};

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/moviesdb');

app.use(helmet());
app.use(limiter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors);

app.use(cors(corsOptions));

app.use(requestLogger);

app.use('/', authRouther);

app.use(auth);

app.use('/users', userRouter);
app.use('/movies', movieRouter);

app.use('*', () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});

app.use(errorLogger);

app.use(errors());
app.use(error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
