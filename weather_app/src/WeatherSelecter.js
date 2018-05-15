import React, { Component } from 'react';

class WeatherSelecter extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.locationUpdate(e.target.value)
  }

  render() {
    return(
      <div className="weather-selector">
        <select onChange={ this.handleChange }>
          {
            this.props.locationGrop.map(item => {
              return <option key={ item.key }>{ item.name }</option>
            })
          }
        </select>
      </div>
    )
  }
}

export default WeatherSelecter