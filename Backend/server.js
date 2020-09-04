require('dotenv').config();
const express = require('express');
const cors = require('cors');
const initDatabase = require('./src/utils/db.js');

const rouletteRouter = require('./src/routes/roulette.js');
const betRouter = require('./src/routes/bet.js');

const app = express();
initDatabase();

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/', rouletteRouter);
app.use('/open', betRouter);



app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
);