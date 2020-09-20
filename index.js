const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');
const exhbs = require('express-handlebars');

const port = process.env.PORT || 3000;
const app = express();

app.use(router);

app.engine('handlebars', exhbs());
app.set('view engine', 'handlebars');

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})