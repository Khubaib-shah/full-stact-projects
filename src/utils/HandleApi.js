import axios from "axios";

const baseUrl = "http://localhost:5000";

// Fetch all todos
const getAllTodo = async (setTodo) => {
  try {
    const { data } = await axios.get(baseUrl);
    console.log("data =>", data);
    setTodo(data);
  } catch (err) {
    console.error("Error fetching todos:", err);
  }
};

// Add a new todo
const addTodo = async (text, setText, setTodo) => {
  try {
    const { data } = await axios.post(`${baseUrl}/save`, { text });

    console.log("Todo added:", data);
    setText("");
    await getAllTodo(setTodo);
  } catch (err) {
    // .response.data[message]
    console.error("Error adding todo:", err);
  }
};

// Update todo
const updateTodo = async (todoId, text, setTodo, setText, setIsUpdating) => {
  try {
    console.log("Starting update for todoId:", todoId, "with text:", text);
    const { data } = await axios.put(`${baseUrl}/update`, {
      _id: todoId,
      text,
    });
    console.log("Todo updated successfully:", data);
    setText("");
    setIsUpdating(false);
    await getAllTodo(setTodo);
  } catch (err) {
    console.error("Error during update:", err.response?.data || err.message);
  }
};

// Delete a todo
const deleteTodo = async (_id, setTodo) => {
  try {
    const { data } = await axios.delete(`${baseUrl}/delete`, {
      params: { _id },
    });
    console.log("Todo deleted:", data);
    await getAllTodo(setTodo);
  } catch (err) {
    console.error("Error deleting todo:", err);
  }
};

export { getAllTodo, addTodo, updateTodo, deleteTodo };
