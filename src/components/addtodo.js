import React, { useState } from "react";
import { addTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

function AddTodo() {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todoText));
    setTodoText(""); // clear the input field after submitting
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <form onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold mb-4">Add Todo</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="todo"
          >
            Todo
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="todo"
            type="text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            placeholder="Enter your todo"
          />
        </div>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;