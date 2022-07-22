const express = require('express');
const cors = require('cors');
const route = require('./router');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use('/', route);

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));

module.exports = app;
