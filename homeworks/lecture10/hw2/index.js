const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const todoRouter = require('./routers/todorouter');
const Todo = require('./models/todo');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.log('Error connecting', err)
    })


app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', async (req, res) => {
    const allTodos = await Todo.find();
    res.render('index', { todos: allTodos });
})

app.use('/api/todos', todoRouter);

app.listen(PORT, () => {
    console.log('Server running on port:', PORT);
})