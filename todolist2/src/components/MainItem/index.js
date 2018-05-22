import React, { Component } from 'react'
import PropTypes from "prop-types"
import moment from "moment"

class MainItem extends Component {
  static propTypes = {
    itemObj: PropTypes.object.isRequired
  }

  render() {
    let obj = this.props.itemObj

    return(
      <li className="list-group-item">
        <div className="checkbox">
          <label>
            <input type="checkbox"/>
            <p>{obj.val} <small>{moment(obj.date).format('YYYY-MM-DD, h:mm:ss a')}</small></p>
          </label>
        </div>
      </li>
    )
  }
}

export default MainItem