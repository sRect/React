import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TestComponent extends Component {

  constructor() {
    super()

    this.state = {
      name: '',
      age: '',
      checked: false
    }
  }

  static propTypes = {
    arr: PropTypes.array.isRequired,
    handleAdd: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
  }

  handleInputChange = (e) => {
    let name = e.target.name,
      val = e.target.value,
      newState = {};

    name === 'username' ? newState.name = val : newState.age = val;
    this.setState(newState);
  }

  handleCheckboxChange = () => {
    let checked = this.refs.checkbox.checked;
    this.setState({
      checked
    })
  }

  handleAdd = () => {
    if (this.state.name && this.state.age) {
      this.props.handleAdd(this.state)
    }
  }

  handleDelete = () => {

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
                  <input type="checkbox" ref="checkbox" checked={this.state.checked} onChange={this.handleCheckboxChange} />
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