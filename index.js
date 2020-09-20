const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');
const exhbs = require('express-handlebars');

require('dotenv').config();

const port = process.env.PORT || 3000;
const app = express();

app.use(router);

app.engine('handlebars', exhbs());
app.set('view engine', 'handlebars');

async function start() {
  try {
    await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, () => {
      console.log('Connected to DB');
      app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
      });
    });
  } catch (e) {
    console.log(e);
  }
}

start();