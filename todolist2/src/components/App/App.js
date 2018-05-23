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
   * 全选事件
   */
  handleAllSelect = (val) => {
    let arr = this.state.arr;

    arr.forEach((item, index) => {
      if(val) {
        item.isChecked = true;
      }else {
        item.isChecked = false;
      }
    })

    this.setState({
      arr
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

    let FooterProps = {
      selectCount: this.state.selectCount,
      handleDelete: this.handleDelete,
      arr: this.state.arr,
      handleAllSelect: this.handleAllSelect
    }

    return (
      <div className="App">
        <div className="page-header text-center">
          <h1>todolist  <small>demo</small></h1>
        </div>
        <Header handleAddInfo={this.handleAddInfo}/>
        <Main {...mainProps} />
        <Footer {...FooterProps} />
      </div>
    );
  }
}

export default App;
