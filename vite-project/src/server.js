const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Mock database
let users = [];

// POST /new
app.post('/new', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).send(newUser);
});

// GET /list
app.get('/list', (req, res) => {
  res.send(users);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
