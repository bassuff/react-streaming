const express = require('express');
const path = require('path');
const app = express();
const {render} = require('./render.js');
const port = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('/', (req, res) => {
  render(res);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
