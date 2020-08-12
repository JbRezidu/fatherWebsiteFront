import React, {useState} from 'react';

const Todos = () => {
  const [todos, setTodos]:any = useState([]);
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
      <button onClick={() => {
        setInputValue('');
        setTodos([...todos, {name: inputValue}]);
      }}>Add</button>
      {
        todos.map((todo: any) => {
          return (<div>{todo.name}</div>);
        })
      }
    </>
  );
};

export default Todos;