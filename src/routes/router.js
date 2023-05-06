const express = require("express");
const router = express.Router();
const TodoController = require('../controllers/TodoController');

//Get all todos.
router.get('/', async (req, res) => {
    let todos = await new TodoController().getTodos();
});

//Create a todo.
router.post('/todo', async (req, res) => {
    let {title} = req.body;
    await new TodoController().createTodo({title},res);
});

//Update a todo.
router.put('/todos/:todoId', async (req, res) => {
    let {todoId} = req.params;
    await new TodoController().updateTodo(todoId,res);
    let todos = await new TodoController().getTodos();
});

//Delete a todo.
router.delete('/todos/:todoId', async (req, res) => {
    let {todoId} = req.params;
    await new TodoController().deleteTodo(todoId);
    let todos = await new TodoController().getTodos();
});

module.exports = router;