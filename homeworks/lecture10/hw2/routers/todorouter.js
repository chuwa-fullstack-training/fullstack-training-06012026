//Import methods from controler and matching them
const express = require('express');
const router = express.Router();
const {
    postTodo, 
    updateTodo
} = require('../controllers/todocontroller');

router.post('/', postTodo);
router.put('/:id', updateTodo);

module.exports = router;