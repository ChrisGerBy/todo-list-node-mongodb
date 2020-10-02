const { Router } = require('express');
const router = Router();
const Todo = require('../models/Todo');

router.get('/', async (req, res) => {
  const todos = await Todo.find({}).lean();

  res.render('home', {
    title: 'Todo List',
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

  res.redirect('/create');
});

router.post('/update', async (req, res) => {
  const todo = await Todo.findById({ '_id': req.body.id });

  const updatedTitle = req.body.title;
  if(updatedTitle) todo.title = updatedTitle;

  todo.completed = !!req.body.completed;

  await todo.save();

  res.redirect('/');
});

router.delete('/delete/:id', async ( req, res ) => {
  const todoId = req.params.id;
  const todo = await Todo.findOneAndDelete({ '_id': todoId });

  if(todo) {
    res.sendStatus(200).json({ success: true });
  } else {
    res.sendStatus(500).json({ message: `No todo with id ${todoId} found!` });
  }
})

module.exports = router;
