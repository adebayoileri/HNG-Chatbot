const express = require('express');
const path = require('path');
require('dotenv').config();

const  bodyParser = require('body-parser'),
  DEFAULT_BODY_SIZE_LIMIT = 1024 * 1024 * 10,
  DEFAULT_PARAMETER_LIMIT = 10000;

const bodyParserJsonConfig = () => ({
   parameterLimit: DEFAULT_PARAMETER_LIMIT,
   limit: DEFAULT_BODY_SIZE_LIMIT
});

const app = express();
const ask = require('./src/controllers/message.js').ask;

app.use(bodyParser.json(bodyParserJsonConfig()));

app.use(express.static('public'));

app.get('/',(req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// app.get('/', (req, res) => res.send('Bot boy!'))
app.post('/ask', ask)

const PORT = process.env.PORT || 4400

app.listen(PORT, () => console.log(`Server up and running on ${PORT}`));