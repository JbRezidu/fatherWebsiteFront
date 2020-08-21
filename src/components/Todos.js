import React, { useState, useRef } from 'react';
import { v4 } from 'uuid';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const textInput = useRef();
  return (
    <>
      <input type="text" ref={textInput}></input>
      <button
        onClick={() => {
          setTodos([...todos, { name: textInput.current.value, id: v4() }]);
          textInput.current.value = '';
        }}
      >
        Add
      </button>
      {todos.map((todo) => {
        return <div key={todo.id}>{todo.name}</div>;
      })}
    </>
  );
};

export default Todos;
