import React, { Component } from 'react';

class Header extends Component {

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="请输入..."/>
              <span className="input-group-btn">
                <button className="btn btn-primary" type="button">Go!</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header