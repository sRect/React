import React, { Component } from 'react'
import PropTypes from "prop-types"

class Footer extends Component {

  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this)
    this.handleAllSelect = this.handleAllSelect.bind(this)
  }

  handleDelete() {
    this.props.handleDelete();
  }

  handleAllSelect(e) {
    let isTrue = e.target.checked;

    this.props.handleAllSelect(isTrue);
  }

  render() {
    let selectCount = this.props.selectCount;
    let count = this.props.arr.length

    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div className="checkbox" onChange={this.handleAllSelect}>
              <label>
                <input type="checkbox"/>
                <span>已选择{selectCount}条，共{count}条</span>
              </label>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-right">
            <button type="button" className="btn btn-danger" onClick={this.handleDelete}>删除</button>
          </div>
        </div>
      </div>
    )
  }
}

Footer.proptypes = {
  selectCount: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  arr: PropTypes.array.isRequired,
  handleAllSelect: PropTypes.func.isRequired
}

export default Footer