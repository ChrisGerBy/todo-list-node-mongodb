const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.render('home', {
    todos: 'Todo List'
  });
});

module.exports = router;