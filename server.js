const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/public/build')));

require('./server/routes')(app);

const port = 8000;
const server = app.listen(port);

console.log('listening on', port);