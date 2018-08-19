import React, { Component, Fragment } from 'react';
import AppUI from './AppUI'

class App extends Component {

  constructor() {
    super()

    this.state = {
      listData: ['hello']
    }
  }

  // 点击列表item
  handleClickItem = (index) => {
    console.log(index)
  }

  // 点击add
  handleAdd = (value) => {
    console.log(value)
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
