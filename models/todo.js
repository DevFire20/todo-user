const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    done:{
        type: Boolean,
        default: false,
    }
},
    {timestamps: true}
)

const Todo = mongoose.model('Todo', TodoSchema)
module.exports = Todo