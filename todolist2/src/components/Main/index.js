import React, {Component} from "react"
import PropTypes from "prop-types"
import MainItem from "../MainItem"

class Main extends Component {
  static propTypes = {
    arr: PropTypes.array.isRequired
  }


  render() {
    let {arr} = this.props;

    return(
      <div className="container">
        <ul className="list-group">
          {
            arr.map((item, index) => {
              return <MainItem itemObj={item} index={index} key={index} {...this.props}/>
            })
          }
        </ul>
      </div>
    )
  }
}

export default Main