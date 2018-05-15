import React, { Component } from 'react';
import WeatherPanel from "./WeatherPanel"
import WeatherSelcter from "./WeatherSelecter"
import { arr as LocationGroup } from "./LocationGroup"

const location = "undefined"

class Weather_App extends Component {
  constructor() {
    super()
  }

  locationUpdate(locationName) {
    this.setState({
      selectedLocation: locationName
    })
  }

  render() {
    return (
      <div className="weather-app">
        <WeatherSelcter locationGrop={LocationGroup} locationUpdate={this.locationUpdate}/>
        <WeatherPanel location={location}/>
      </div>
    )
  }
}

export default Weather_App