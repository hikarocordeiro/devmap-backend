require('dotenv/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'Hello' });
});


app.listen(3333);
