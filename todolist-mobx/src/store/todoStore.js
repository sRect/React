import {observable, action, computed} from 'mobx';

const ALL = 'all';
const COMPLETED = 'completed';
const UNCOMPLETED = 'uncompleted';

// 类似于Redux里的Reducer
class TodoStore {
  // 待办列表
  @observable itemList;
  // 新建待办内容
  @observable itemContent;
  // 筛选类型
  @observable filterType;

  filterTree = {
    [COMPLETED]: true,
    [UNCOMPLETED]: false
  };

  constructor() {
    this.itemList = [{
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
    }];

    this.itemContent = "";
    this.filterType = ALL;
  }

  @computed
  get filterItemList () {
    return this.filterType === ALL ? this.itemList : this.itemList.filter(item => item.isComplete === this.filterTree[this.filterType]);
  }

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

  @action
  removeItem = (id) => { // 删除事件
    this.itemList = this.itemList.filter(item => item.id !== id);
  }
}

const todoStore = new TodoStore();

export default todoStore;