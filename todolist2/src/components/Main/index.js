import React, {Component} from "react"

class Main extends Component {

  render() {
    return(
      <div className="container">
        <ul className="list-group">
          <li className="list-group-item">
            <div className="checkbox">
              <label>
                <input type="checkbox"/>
                Cras justo odio
              </label>
            </div>
          </li>
          <li className="list-group-item">
            <div className="checkbox">
              <label>
                <input type="checkbox"/>
                Cras justo odio
              </label>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Main