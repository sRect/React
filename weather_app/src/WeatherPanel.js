import React, { Component } from 'react'
import PropTypes from 'prop-types'

class WeatherPanel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tempreature: 'NA'
    }

    this.getTemperature = this.getTemperature.bind(this)
  }

  getTemperature() {
    const mockTemperature = Math.random() * 100;

    this.setState({
      tempreature: mockTemperature
    })
  }

  render() {
    return(
      <div className="weather-panel">
        <p>{ this.props.location }的温度是： { this.state.tempreature }</p>
        <button onClick={ this.getTemperature }>获取温度</button>
      </div>
    )
  }
}

WeatherPanel.propTypes = {
  location: PropTypes.string.isRequired
}

export default WeatherPanel