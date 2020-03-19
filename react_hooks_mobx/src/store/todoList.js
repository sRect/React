import { observable, computed, action } from 'mobx';
import TodoItem from './todoItem'

class Todolist {
  @observable list = [];

  @action
  addTodo = (text) => {
    this.list.push(new TodoItem(text));
  }

  @action
  removeTodo = (todo) => {
    this.list.splice(this.list.indexOf(todo), 1);
  }

  @computed
  get finishedTodos() {
    return this.list.filter(todo => todo.isDone);
  }

  @computed
  get openTodos() {
    return this.list.filter(todo => !todo.isDone);
  }
}

export default Todolist;
