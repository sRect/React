import React, { Component } from 'react'

class Footer extends Component {

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div className="checkbox">
              <label>
                <input type="checkbox"/>
                <span>已选择0条，共0条</span>
              </label>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-right">
            <button type="button" className="btn btn-danger">删除</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer