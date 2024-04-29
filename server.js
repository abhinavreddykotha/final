// const express = require('express')
// const cors = require('cors')
// const morgan = require('morgan')
// const dotenv = require('dotenv')
// const connectDb = require('./config/connectDb')
// // const colors = require('colors')
 
// // const connectDb = require('./config/connectDb')
// // const mongoose = require('mongoose');


// //config dot env file
// dotenv.config();
// // database call
// connectDb();
// //rest object
// const app = express()

// app.use(morgan('dev'))
// app.use(express.json())
// app.use(cors())

// //routes
// app.use('/api/v1/users', require('./Routes/userRoutes'))

// const PORT = 8080 || process.env.PORT

// //listening server
// app.listen(PORT, () => {
//     console.log(`server running on port ${PORT}`);
// })
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDb = require('./config/connectDb');

// config dot env file
dotenv.config();

// database call
connectDb();

// rest object
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// routes
app.use('/api/v1/users', require('./Routes/userRoutes'));

const PORT = 8080 || process.env.PORT;

// listening server
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});