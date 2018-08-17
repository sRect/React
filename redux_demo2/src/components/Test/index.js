import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types'
import './test.css'
import 'animate.css/animate.min.css'

class TestComponent extends Component {

  constructor() {
    super()

    this.state = {
      name: '',
      age: '',
      classNames: {
        appear: 'bounceIn',
        appearActive: 'bounceIn',
        enter: 'bounceIn',
        enterActive: 'bounceIn',
        enterDone: 'bounceIn',
        exit: 'bounceOut',
        exitActive: 'bounceOut',
        exitDone: 'bounceOut'
      }
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
      }, () => {
        console.log(this.ul.querySelectorAll('li').length)
      })
    } else {
      alert('姓名/年龄不可为空')
    }
  }

  // 删除事件
  handleDelete = () => {
    this.props.handleDelete().then((data) => {
      console.log(this.ul.querySelectorAll('li').length)
    });
  }

  render() {
    const { arr } = this.props;
    return (
      <div>
        <section>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="name">姓名：</label>
            <input type="text" id="name" name="username" placeholder="请输入您的姓名" value={this.state.name} onChange={this.handleInputChange} />
            <label htmlFor="age">年龄：</label>
            <input type="text" id="age" name="age" placeholder="请输入您的年龄" value={this.state.age} onChange={this.handleInputChange} />
          </div>

          <div>
            <span>&nbsp;&nbsp;</span>
            <input type="button" value="add" onClick={this.handleAdd} />
            <span>&nbsp;&nbsp;</span>
            <input type="button" value="delete" onClick={this.handleDelete} />
            <span>&nbsp;&nbsp;</span>
            <input type="button" value="全选" onClick={this.handleCheckboxChange.bind(this, true)} />
            <span>&nbsp;&nbsp;</span>
            <input type="button" value="全部取消" onClick={this.handleCheckboxChange.bind(this, false)} />
            <span>&nbsp;&nbsp;</span>
            <input type="button" value="反选" onClick={this.handleCheckboxChange.bind(this, null)} />
          </div>
        </section>
        <section>
          <span className={arr.length > 0 ? 'disactive' : 'active'}>暂无数据</span>
          <ul ref={(ul) => { this.ul = ul }}>
            <TransitionGroup>
              {
                arr.map((item, index) => {
                  return (
                    <CSSTransition
                      timeout={300}
                      classNames={this.state.classNames}
                      unmountOnExit
                      appear={true}
                      onEntered={(el) => {
                        el.lastChild.style.color = 'blue';
                      }}
                      key={index}
                    >
                      <li className="animated">
                        <input type="checkbox" ref="checkbox" checked={item.checked} onChange={this.handleCheckboxChange.bind(this, index)} />
                        <span>name:{item.name}</span>
                        <i>--</i>
                        <span>age:{item.age}</span>
                      </li>
                    </CSSTransition>
                  )
                })
              }
            </TransitionGroup>
          </ul>
        </section>
      </div>
    )
  }
}

export default TestComponent