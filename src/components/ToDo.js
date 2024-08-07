import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updatetodo } from '../features/todo/todoSlice';

const ToDo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleUpdate = (id, text,e) => {
    const newText = prompt("Enter new text:", text);
    if (newText !== null && newText !== text) {
      dispatch(updatetodo({ id, text: newText }));
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto mt-10">
      <div className="text-xl font-bold mb-4">Todos</div>
      <ul className="list-none p-0">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-2 my-2 bg-white rounded shadow-sm"
          >
            {todo.text}
            <button
              onClick={() => handleUpdate(todo.id, todo.text)}
              className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700 ml-2"
            >
              Update
            </button>
            <button
              className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-700 ml-2"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
