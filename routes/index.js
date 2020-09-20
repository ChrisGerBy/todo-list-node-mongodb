const { Router } = require('express');
const router = Router();
const Todo = require('../models/Todo');

router.get('/', async (req, res) => {
  const todos = await Todo.find({}).lean();

  res.render('home', {
    todos: 'Todo List',
    todos,
  });
});

router.get('/create', (req, res) => {
  res.render('create', {
    title: "Create new todo"
  })
});

router.post('/create', async (req, res) => {
  const todo = new Todo({
    title: req.body.title
  });

  await todo.save();

  res.redirect('/');
});

module.exports = router;