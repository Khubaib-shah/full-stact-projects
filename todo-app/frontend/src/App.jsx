import React, { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import { addTodo, deleteTodo, getAllTodo, updateTodo } from "./utils/HandleApi";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState("");

  useEffect(() => {
    getAllTodo(setTodo);
  }, []);

  const updateMode = async (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setTodoId(_id);
  };
  return (
    <div className="app">
      <div className="max-w-[600px] m-auto p-4">
        <h1 className="m-4 text-center text-2xl font-bold">Todo App</h1>
        <div className="m-4 flex gap-4 justify-center">
          <input
            className="outline-none w-96 px-2 border-b-[1px] border-black"
            type="text"
            placeholder="Add Todo...."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="bg-black text-white px-6 py-2 border rounded-md"
            onClick={
              isUpdating
                ? () =>
                    updateTodo(todoId, text, setTodo, setText, setIsUpdating)
                : () => addTodo(text, setText, setTodo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </button>
        </div>
        <div>
          {todo.map((item) => (
            <Todo
              key={item._id}
              text={item.text}
              updateMode={() => {
                updateMode(item._id, item.text), console.log(item._id);
              }}
              deleteMode={() => deleteTodo(item._id, setTodo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
