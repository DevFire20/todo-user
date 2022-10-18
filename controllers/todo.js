const Todo = require("../models/todo");

const createTodo = async (req, res) => {
    try {
        const title = req.body.title
        const description = req.body.description
        const time = req.body.time
       
        const todo = await Todo.create({title: title, description: description, time: time})
        res.status(200).json(todo)
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getTodos = async (req, res) => {
  try {
    const todo = await Todo.find({});
    if (!todo) return res.status(404).send("No such Todo");
    res
      .status(200)
      .json({ message: "Todo retrieved successfully", data: todo });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getTodo = async (req, res) => {
  try {
    const { id } = req.params.id;
    const todo = await Todo.findOne({ id: id });
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res
      .status(200)
      .json({ message: "Todo retrieved successfully", data: todo });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params.id;
    const todo = await Todo.findOneAndDelete({ id: id });
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.status(200).json({ message: "Todo deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateTodo = async (req, res) => {
    try{
        const {title,  description, time} = req.body
        const {id} = req.params.id;
        const todo = await Todo.findOneAndUpdate({id: id, title: title, description: description, time: time});
        if(!todo) return res.status(404).send("Not Found");
        res.status(200).json({message: "Success", data: todo});

    } catch (error){
        res.status(404).send("Error: " + error.message)
    }
}

const done = async (req, res) => {
    try{
        const {id} = req.params.id;
        const todo = await findOneAndUpdate({id: id, done:true})
        res.status(200).json(todo)
    } catch(error){
        res.status(500).send(error.message)
    }
}


module.exports = {createTodo, getTodos, getTodo, deleteTodo, updateTodo, done}