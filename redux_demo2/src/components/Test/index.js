import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TestComponent extends Component {

  constructor() {
    super()

    this.state = {
      name: '',
      age: ''
    }
  }

  static propTypes = {
    arr: PropTypes.array.isRequired,
    handleAdd: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleChecked: PropTypes.func.isRequired
  }

  // input框输入事件
  handleInputChange = (e) => {
    let name = e.target.name,
      val = e.target.value,
      newState = {};

    name === 'username' ? newState.name = val : newState.age = val;
    // this.setState(newState);

    this.setState(() => (newState))
  }

  // 勾选事件
  handleCheckboxChange = (index) => {
    this.props.handleChecked({
      index: index
    })
  }

  // 添加事件
  handleAdd = () => {
    if (this.state.name && this.state.age) {
      let name = this.state.name,
        age = this.state.age,
        checked = false,
        obj = {
          name,
          age,
          checked
        }

      this.props.handleAdd(obj)

      this.setState(() => {
        return {
          name: '',
          age: ''
        }
      })
    } else {
      alert('姓名/年龄不可为空')
    }
  }

  handleDelete = () => {
    this.props.handleDelete();
  }

  render() {
    const { arr } = this.props;
    return (
      <div>
        <section>
          <label htmlFor="name">姓名：</label>
          <input type="text" id="name" name="username" placeholder="请输入您的姓名" value={this.state.name} onChange={this.handleInputChange} />
          <label htmlFor="age">年龄：</label>
          <input type="text" id="age" name="age" placeholder="请输入您的年龄" value={this.state.age} onChange={this.handleInputChange} />

          <span>&nbsp;&nbsp;</span>
          <input type="button" value="add" onClick={this.handleAdd} />
          <span>&nbsp;&nbsp;</span>
          <input type="button" value="delete" onClick={this.handleDelete} />
        </section>
        <ul>
          {
            arr.map((item, index) => {
              return (
                <li key={index}>
                  <input type="checkbox" ref="checkbox" checked={item.checked} onChange={this.handleCheckboxChange.bind(this, index)} />
                  <span>name:{item.name}</span>
                  <i>--</i>
                  <span>age:{item.age}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default TestComponent