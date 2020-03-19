import { useContext } from 'react';
import { TodolistContext } from './store-provider';
// import { TodoList } from '../store/todoList';

export const useStore = () => useContext(TodolistContext);