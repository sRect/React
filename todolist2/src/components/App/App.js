import React, { Component } from 'react';

import Header from "../Header"
import Main from "../Main"
import Footer from "../Footer"

import './App.less';

class App extends Component {
  constructor() {
    super()

    this.state = {
      arr: [],
      selectCount: 0
    }
  }

  /**
   * 添加信息
   */
  handleAddInfo = (obj) => {
    let arr = this.state.arr;
    arr.unshift(obj);

    this.setState({
      arr
    })
  }

  /**
   * checkbox勾选
   */
  handleChecked = (index, obj) => {
    // console.log(obj)
    let arr = this.state.arr, selectCount = 0;
    arr.splice(index, 1, obj)


    arr.forEach((item, index) => {
      if(item.isChecked) {
        selectCount += 1;
      }
    })

    this.setState({
      selectCount
    })
  }

  /**
   * 删除事件
   */
  handleDelete = () => {
    let arr = this.state.arr;

    // for(let i = 0,len = arr.length; i < len; i++) {
    //   if(arr[i].isChecked) {
    //     arr.splice(i, 1);
    //     i--;
    //   }
    // }
    let newArr = arr.filter((item, index) => {
      return (item.isChecked === false)
    })
    console.log(newArr)
    this.setState({
      arr: newArr,
      selectCount: 0
    })
  }

  render() {
    let mainProps = {
      arr: this.state.arr,
      handleChecked: this.handleChecked
    }

    return (
      <div className="App">
        <Header handleAddInfo={this.handleAddInfo}/>
        <Main {...mainProps} />
        <Footer selectCount={this.state.selectCount} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
