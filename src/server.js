const path = require('path');
const express = require('express');
const cloudinary = require('cloudinary');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload');
const contactRouter = require('./lib/routers/contactRouter');
const projectRouter = require('./lib/routers/projectRouter');
const testimonialRouter = require('./lib/routers/testimonialRouter');

// api config
dotenv.config();
const app = express();
const { PORT = 3001 } = process.env;

// middlewares
app.use(express.json());
app.use(cors());
app.use(express.static('dist/app'));
app.use(fileUpload({ useTempFiles: true, tempFileDir: '/tmp/' }));

// db config
mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Successfully connected to database');
  })
  .catch((error) => {
    console.log('database connection failed. exiting now...');
    console.error(error);
  });
cloudinary.config({
  cloud_name: 'mehfoozurrehman',
  api_key: '915662453295273',
  api_secret: 'msK9WHKJPgdH93nmAEi88kDl0jI',
});

// api endpoints
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'app/index.html'));
})

app.post('/api/v1/upload', function (req, res) {
  cloudinary.v2.uploader.upload(
    req.files.image.tempFilePath,
    { public_id: req.body.name },
    function (error, result) {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
      }
    }
  );
});
app.use('/api/v1', contactRouter);
app.use('/api/v1', projectRouter);
app.use('/api/v1', testimonialRouter);
// listners
app.listen(PORT, () => console.log(`api working on ${PORT}`));
