const express = require('express');
const router = require('./routes/authRoute');
const connectDB = require('./connect');
const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');

require('dotenv').config();
const app = express();

//middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use('/', router);

// app.get('/',(req,res) => {
//     res.json('hello world')
// })

const port = 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('connected');
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
