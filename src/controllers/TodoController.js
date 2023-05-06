const db = require("../config/db");

class TodoController {
    //get all todos.
    async getTodos() {
        let results = await db.query(`SELECT * FROM todos_db`).catch(console.log);
        return results.rows;
    }

    //create a todo.
    async createTodo(todo) {
        await db
            .query("INSERT INTO todos_db (title, checked) VALUES ($1, $2)", [todo.title,false,])
            .catch(console.log);
        return;
    }

    //update a todo.
    async updateTodo(todoId) {
        //get the previous todo.
        let original_todo = await db
            .query(`SELECT * FROM todos_db WHERE id=$1`, [parseInt(todoId)])
            .catch(console.log);
        let new_checked_value = !original_todo.rows[0].checked;

        //update the checked todo
        await db
            .query(`UPDATE todos_db SET checked=$1 WHERE id=$2`, [new_checked_value,parseInt(todoId),])
            .catch(console.log);
        return;
    }

    //delete a todo.
    async deleteTodo(todoId) {
        await db.query(`DELETE FROM todos_db WHERE id=$1`, [parseInt(todoId)]).catch(console.log);
        return;
    }
}

module.exports = TodoController;