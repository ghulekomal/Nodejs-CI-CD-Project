const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

let todoList = [];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { todoList });
});

app.post('/add', (req, res) => {
  const newTodo = req.body.newtodo;
  if (newTodo.trim().length > 0) {
    todoList.push(newTodo);
  }
  res.redirect('/');
});

app.post('/delete/:index', (req, res) => {
  const index = req.params.index;
  if (index >= 0 && index < todoList.length) {
    todoList.splice(index, 1);
  }
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Todo List app running on http://0.0.0.0:${port}`);
});

