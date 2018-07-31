import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TestComponent extends Component {

  static propTypes = {
    arr: PropTypes.array.isRequired,
    handleAdd: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
  }

  handleAdd = () => {
    this.props.handleAdd({ name: 'rose', age: 18 })
  }

  render() {
    const { arr, handleAdd, handleDelete } = this.props;

    return (
      <div>
        <section>
          <input type="button" value="add" onClick={handleAdd} />
          <input type="button" value="delete" onClick={handleDelete} />
        </section>
        <ul>
          {
            arr.map((item, index) => {
              return (
                <li key={index}><span>name:{item.name}</span>--<span>age:{item.age}</span></li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default TestComponent