import { createContext } from 'react';
import TodoList from '../store/todoList';

export const TodolistContext = createContext(TodoList);
export const TodoListProvider = TodolistContext.Provider;