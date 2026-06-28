//specific implementation of apis
const Todo = require('../models/todo');

//Find all todos

//Post a new todo item
const postTodo = async (req, res) => {
    try{
        const curTodo = new Todo({
            todo: req.body.todo
        }) 
        await curTodo.save();
        console.log(req.body)
        res.status(201).json(curTodo);

    }
    catch(err){
        console.log(err.message);
        res.status(500).json({ message: 'Server Error'});
    }
}

//Update todo
const updateTodo = async(req, res) => {
    try{
        const curTodo = await Todo.findById(req?.params.id);
        curTodo.done = curTodo.done? false: true;
        await curTodo.save();
        res.status(200).json(curTodo);
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({message: 'Server Error'});
    }
}


module.exports = {
    postTodo,
    updateTodo
}
