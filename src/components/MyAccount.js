import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as todosActions from '../actions/todos.actions';
import { Link } from 'react-router-dom';

let MyAccount = ({ todos, addTodo }) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <Link to="/home">Pour aller sur home c'est ici</Link>
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      ></input>
      <button
        onClick={() => {
          addTodo(inputValue);
          setInputValue('');
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

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (name) => dispatch(todosActions.addTodo(name)),
});

MyAccount = connect(mapStateToProps, mapDispatchToProps)(MyAccount);

export default MyAccount;
