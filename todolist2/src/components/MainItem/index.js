import React, { Component } from 'react'
import PropTypes from "prop-types"
import moment from "moment"

class MainItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // isChecked: props.itemObj.isChecked,
      index: props.index
    }
  }

  static propTypes = {
    itemObj: PropTypes.object.isRequired,
    handleChecked: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
  }

  /**
   * 勾选事件
   */
  handleChange = (e) => { 
    let istrue = e.target.checked;
    // let isChecked = !this.state.isChecked;
    console.log(istrue)
    // this.setState({
    //   isChecked
    // })

    let newObj = {
      val: this.props.itemObj.val,
      isChecked: istrue,
      date: this.props.itemObj.date
      
    }

    this.props.handleChecked(this.state.index, newObj);
    
  }

  render() {
    let obj = this.props.itemObj
    console.log(obj)
    return(
      <li className="list-group-item">
        <div className="checkbox">
          <label>
            <input type="checkbox" checked={obj.isChecked} onChange={this.handleChange} />
            <p>{obj.val} <small>{moment(obj.date).format('YYYY-MM-DD, h:mm:ss a')}</small></p>
          </label>
        </div>
      </li>
    )
  }
}

export default MainItem