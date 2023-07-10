const express = require('express');
const path = require('path');
const app = express();
const {render} = require('./render.js');

app.use(express.static(path.resolve(__dirname, '../build')));
app.use(express.static(path.resolve(__dirname, '../assets')));

app.get('/', (req, res) => {
  render(res);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
