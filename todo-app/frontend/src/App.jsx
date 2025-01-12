import React, { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import { getAllTodo } from "./utils/HnadleApi";

const App = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    getAllTodo(setTodo);
  }, []);
  return (
    <div className="app">
      <div className="max-w-[600px] m-auto p-4">
        <h1 className="m-4 text-center text-2xl font-bold">Todo App</h1>
        <div className="m-4 flex gap-4 justify-center">
          <input
            type="text"
            name="todo"
            placeholder="Add Todo...."
            className="outline-none w-96 px-2 border-b-[1px] border-black"
          />
          <button className="bg-black text-white px-6 py-2 border rounded-md ">
            Add
          </button>
        </div>
        <div className="">
          {todo.map((item) => (
            <Todo key={item._id} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
