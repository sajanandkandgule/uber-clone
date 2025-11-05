const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');

connectDB();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// Use user routes
app.use('/users', userRoutes);
app.use('/captains', captainRoutes);
// Connect to the database

// Sample route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;