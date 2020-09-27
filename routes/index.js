const { Router } = require('express');
const router = Router();
const Todo = require('../models/Todo');

router.get('/', async (req, res) => {
  const todos = await Todo.find({}).lean();

  res.render('home', {
    title: 'Todo List',
    todos,
    helpers: {
      someFunc: (e) => console.log(e)
    },
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

router.post('/update', async (req, res) => {
  const todo = await Todo.findById({ '_id': req.body.id });

  todo.completed = !!req.body.completed;

  await todo.save();

  res.redirect('/');
});

module.exports = router;
