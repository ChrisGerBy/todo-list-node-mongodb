const express = require('express');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;
const app = express();

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})