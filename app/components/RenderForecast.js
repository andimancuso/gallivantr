import React from 'react';
import { GetForecast } from './Forecast';

export class RenderForecast extends React.Component {
  render() {
    return (
      <div>
          <div>RenderForecast.js</div>
          <GetForecast />
      </div>
    );
  };
};

/*





const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDivs = [$("#weather1"), $("#weather2"), $("#weather3"), $("#weather4")];
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export function renderForecast(days) {
  $weatherDivs.forEach(($day, index) => {
    let weatherContent =
      '<h2> High: ' + days[index].day.maxtemp_f + '°F</h2>' +
      '<h2> Low: ' + days[index].day.mintemp_f + '°F</h2>' +
      '<img src="http://' + days[index].hour[0].condition.icon +
      '" class="weathericon" />' +
      '<h2>' + weekDays[(new Date(days[index].date)).getDay()] + '</h2>';
    $day.append(weatherContent);
  });
}

/////////////////////////

<div id="destination">

</div>
<div class="sectiontitle">
  <h2>WEATHER</h2>
</div>
<section id="weather">

    <div class="weather" id="weather1">

    </div>
    <div class="weather" id="weather2">

    </div>
    <div class="weather" id="weather3">

    </div>
    <div class="weather" id="weather4">

    </div>

</section>

*/
