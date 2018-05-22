import React, { Component } from 'react';
import PropTypes from "prop-types"

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      val: "",
      isChecked: false
    }

  }

  static propTypes = {
    handleAddInfo: PropTypes.func.isRequired
  }

  handleChange = (e) => {
    let val = e.target.value;

    this.setState({
      val
    })
  }

  handleSubmit = () => {
    if(this.state.val) {
      let obj = {
        date: new Date().getTime()
      }

      let params = Object.assign({}, this.state, obj)
      this.props.handleAddInfo(params);

      this.setState({
        val: ""
      })
    }else {
      alert("请输入内容后提交")
      return;
    }
    
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="请输入..." value={this.state.val} onChange={this.handleChange} />
              <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick={this.handleSubmit}>添加</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header