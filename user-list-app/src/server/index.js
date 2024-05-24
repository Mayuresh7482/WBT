import 'bootstrap/dist/css/bootstrap.min.css';
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let users = [];

app.post('/new', (req, res) => {
  const user = req.body;
  users.push(user);
  res.json(user);
});

app.get('/users', (req, res) => {
  res.json(users);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));