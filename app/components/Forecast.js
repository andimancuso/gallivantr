import React from 'react';
import ReactDOM from 'react-dom';

const apiKey = 'ba1d09cb3b2c435f901235817171309';
const forecastUrl = 'https://api.apixu.com/v1/forecast.json?key=';

export class GetForecast extends React.Component {
  async getForecast() {
    const urlToFetch = forecastUrl + apiKey + '&q=' + $input.val() + '&days=4&hour=11';

    try {
      let response = await fetch(urlToFetch);
      if (response.ok) {
        let jsonResponse = await response.json();
        let days = jsonResponse.forecast.forecastday;
        return days;
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        Forecast.js test: {this.props.location}
      </div>
    );
  };
}
