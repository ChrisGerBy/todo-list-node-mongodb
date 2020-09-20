const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.render('home', {
    todos: 'Todo List'
  });
});

router.get('/create', (req, res) => {
  res.render('create', {
    title: "Create new todo"
  })
})

module.exports = router;