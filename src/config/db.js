const Pool = require("pg").Pool;
const pool = new Pool({
    user:'piragash', // replace your username
    host:'localhost',
    database:'todos_db', // name of your database like `todos_db`
    password:'password', // your password
    port:'5432' //default port
});

module.exports = pool;