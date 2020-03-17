import {observable, action} from 'mobx';

class TodoStore {
  // 待办列表
  @observable itemList = [{
    id: 1,
    content: '吃饭',
    isComplete: false
  },
  {
    id: 2,
    content: '睡觉',
    isComplete: false
  },
  {
    id: 3,
    content: '打豆豆',
    isComplete: true
  }
  ];

  // 新建待办内容
  @observable itemContent = '';

  @action
  addItem = () => { // 添加待办
    this.itemList.push({
      id: new Date().getTime(),
      content: this.itemContent,
      isComplete: false
    });
    this.itemContent = '';
  }

  @action
  inputChange = (e) => { // 输入框事件
    this.itemContent = e.target.value;
  }
}