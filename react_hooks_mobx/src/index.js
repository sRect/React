import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import TodoList from "./store/todoList";
import { TodoListProvider } from './helper/store-provider';

const todoList = new TodoList([
  'Should Starting Writing in React',
  'Should Learn MobX',
  'Should Watch Once Piece :)'
]);


ReactDOM.render(
  <TodoListProvider value={todoList}>
    <App />
  </TodoListProvider>, 
  document.getElementById('root')
);
