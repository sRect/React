import React, { Component } from "react"
import {Link} from "react-router-dom"

class News extends Component {

  handleClick = () => {
    this.props.history.push({
      pathname: '/news/999/details',
      query: {
        name: "jack",
        age: 18
      }
    })
  }

  render() {
    console.log(this.props.match.params.id)

    return (
      <div>
        <h2>News</h2>
        <span>路由接收参数：{JSON.stringify(this.props.match)}</span>

        <div>
          <Link to={{
            pathname: '/news/333/details'
          }} activeclassname="active">详情
          </Link>
        </div>

        <div>
          <button onClick={this.handleClick}>跳转详情</button>
        </div>
      </div>
    )
  }
}

export default News