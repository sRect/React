import { action, observable } from 'mobx';

class TodoItem {
  id = new Date().getTime();

  @observable text = "";
  @observable isDone = false;

  constructor(text) {
    this.text = text;
  }

  @action
  toggleIsDone = () => {
    this.isDone = !this.isDone;
  }

  @action
  updateText = (text) => {
    this.text = text;
  }
}

export default TodoItem
