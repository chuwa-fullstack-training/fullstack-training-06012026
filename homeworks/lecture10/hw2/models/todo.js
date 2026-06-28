const mongoose = require('mongoose');
const {Schema} = mongoose;


const todoSchema = new Schema({
    todo:{
        type: String,
        required: true
    },
    createTime: {
        type: Date,
        default: Date.now
    },
    dueTime:{
        type: Date
    },
    done:{
        type: Boolean,
        default: false
    }
})

const Todo = mongoose.model('todo', todoSchema);

module.exports = Todo;