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
app.use('/', express.static('../frontend/dist'));
app.use('/assests', express.static('../frontend/dist/assests'));
app.use('/', router);

// app.get('/',(req,res) => {
//     res.json('hello world')
// })

//Define Routes Here
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'), (err) => {
    if (err) {
      console.error('Error sending file:', err);
    }
  });
});

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
