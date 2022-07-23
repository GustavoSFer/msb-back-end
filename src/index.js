const express = require('express');
const multer = require('multer');
const cors = require('cors');
const route = require('./router');
const error = require('./middleware/middlewareError');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

app.use('/', upload.single('file'), route);
app.use(error);

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));

module.exports = app;
