import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TestComponent from '../Test'
import Foo from '../Foo'

class App extends Component {

  static propTypes = {
    num: PropTypes.number.isRequired,
    Increase: PropTypes.func.isRequired,
    Decrease: PropTypes.func.isRequired
  }

  render() {
    const { Increase, Decrease, num } = this.props;

    const childrenProps = {
      handleAdd: this.props.handleAdd,
      handleDelete: this.props.handleDelete,
      handleChecked: this.props.handleChecked,
      arr: this.props.arr
    }

    return (
      <div className="App">
        <section>
          <p>num:{num}</p>
          <div>
            <button onClick={Increase}>increase</button>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <button onClick={Decrease}>decrease</button>
          </div>
        </section>
        <hr />

        <TestComponent {...childrenProps} />

        <Foo num={this.props.num}/>
      </div>
    );
  }
}

export default App;
