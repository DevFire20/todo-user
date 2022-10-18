const express = require("express")
const router = express.Router()

const {createTodo, getTodos, getTodo, deleteTodo, updateTodo, done} = require('../controllers/todo')

router.post('/create', createTodo)
router.get('/todos', getTodos)
router.get('/todo/:id', getTodo)
router.put('/todo/:id', updateTodo)
router.delete('/todo/:id', deleteTodo)
router.patch('/todo/:id', done)

module.exports = router
