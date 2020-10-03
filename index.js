const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');
const exhbs = require('express-handlebars');
const path = require('path');

require('dotenv').config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exhbs());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

async function start() {
  try {
    await mongoose.connect(process.env.MONGODB || 'mongodb://localhost/todo-list-node-mongodb', {
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
