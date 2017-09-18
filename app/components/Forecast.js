import React from 'react';
import ReactDOM from 'react-dom';

export class GetForecast extends React.Component {
  render() {
    return (
      <div>
        Forecast.js
      </div>
    );
  };
}

/*

const apiKey = 'ba1d09cb3b2c435f901235817171309';
const forecastUrl = 'https://api.apixu.com/v1/forecast.json?key=';

const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDivs = [$("#weather1"), $("#weather2"), $("#weather3"), $("#weather4")];
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export async function getForecast() {
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


*/
