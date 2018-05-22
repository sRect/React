import React, { Component } from 'react'
import PropTypes from "prop-types"
import moment from "moment"

class MainItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isChecked: props.itemObj.isChecked,
      index: props.index
    }
  }

  static propTypes = {
    itemObj: PropTypes.object.isRequired,
    handleChecked: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
  }

  handleChange = () => {
    let isChecked = !this.state.isChecked;

    this.setState({
      isChecked
    })

    let newObj = {
      isChecked: isChecked,
      val: this.props.itemObj.val,
      date: this.props.itemObj.date,
    }

    this.props.handleChecked(this.state.index, newObj);
    
  }

  render() {
    let obj = this.props.itemObj
    
    return(
      <li className="list-group-item">
        <div className="checkbox">
          <label>
            <input type="checkbox" checked={this.state.isChecked} onChange={this.handleChange} />
            <p>{obj.val} <small>{moment(obj.date).format('YYYY-MM-DD, h:mm:ss a')}</small></p>
          </label>
        </div>
      </li>
    )
  }
}

export default MainItem