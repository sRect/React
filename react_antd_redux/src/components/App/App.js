import React, { Component, Fragment } from 'react';
import AppUI from './AppUI';
import { handleAdd, handleClickItem } from '../../store/actions'
import store from '../../store';

class App extends Component {

  constructor() {
    super()

    this.state = store.getState();

    store.subscribe((() => {
      this.handleStoreChange();
    }))
  }

  // 点击列表item
  handleClickItem = (index) => {
    console.log(index)
  }

  // 点击add
  handleAdd = (value) => {
    store.dispatch(handleAdd(value));
  }

  // store数据发生改变，执行的事件
  handleStoreChange = () => {
    this.setState(store.getState());
  }

  render() {
    const childProps = {
      listData: this.state.listData,
      handleClickItem: this.handleClickItem,
      handleAdd: this.handleAdd
    }

    return (
      <Fragment>
        <AppUI {...childProps} />
      </Fragment>
    );
  }
}

export default App;
