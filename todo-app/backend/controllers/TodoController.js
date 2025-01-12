import Todo from "../models/TodoModel.js";

// Get all todos
export const getTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    console.error(`Error fetching todos: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Save a new todo
export const saveTodo = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: "Text field is required" });
  }

  try {
    const newTodo = await Todo.create({ text });
    console.log("Added successfully:", newTodo);
    res.status(200).json(newTodo);
  } catch (error) {
    console.error(`Error adding todo: ${error}`);
    res.status(500).json({ message: "Failed to add todo" });
  }
};

export const updateTodo = async (req, res) => {
  const { _id, text } = req.body;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(_id, { text });
    console.log("updated successfully:", updatedTodo);
    res.status(201).json(updatedTodo);
  } catch (error) {
    console.error(`Error adding todo: ${error}`);
    res.status(500).json({ message: "Failed to Update todo" });
  }
};

export const deleteTodo = async (req, res) => {
  const { _id } = req.query;

  if (!_id) {
    return res.status(400).json({ message: "Todo ID is required" });
  }

  try {
    const deletedTodo = await Todo.findByIdAndDelete(_id);
    if (!deletedTodo) {
      return res.status(404).json({ message: "No Todo found" });
    }
    res.status(200).json({ message: "Deleted successfully", deletedTodo });
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ message: "Failed to delete todo" });
  }
};
