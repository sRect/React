import  React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Foo extends Component {

  static proptypes = {
    num: PropTypes.number
  }
  
  constructor(props) {
    super(props)
    this.state = {
      num: 0
    }
  }
  
  componentWillReceiveProps (nextProps) {
    console.log(nextProps)
    this.setState(() => {
      return {
        num: nextProps.num
      }
    })
  }

  render() {
    const { num } = this.props;
    
    return (
      <div>
        <p>props: {num}</p>
        <p>state: { this.state.num }</p>
      </div>
    )
  }
}
