const express = require("express");
const urlRoute = require('./routes/url');
const { connectToMongoDB } = require('./connection');
// Load environment variables from the .env file
require('dotenv').config();

const app = express();
const PORT = 8001;

// Retrieve the MongoDB URL & DataBase Name from the .env file
const dbUrl = process.env.MONGODB_URL;
const dbName = process.env.DB_NAME;
const mongoURL = `${dbUrl}${dbName}`

// database connection
connectToMongoDB(mongoURL)
  .then(() => console.log('MongoDB conneted'))

// middlewares
app.use(express.json()); //parse body as JSON

// url routes
app.use('/', urlRoute);

// server listen on PORT
app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`))