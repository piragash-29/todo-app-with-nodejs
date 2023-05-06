const express = require("express");
const cors = require("cors");
const app = express();
//import the routes
const todoRoutes = require('./routes/router');

app.use(express.json());
app.use(cors());
//configure the app.
app.use(todoRoutes);

app.get("/", (req, res) =>{
    // res.send("hello world!");
    res.json({info: 'Nodejs is running successfully with nodemon server'})
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`app started on port ${PORT}`)
});