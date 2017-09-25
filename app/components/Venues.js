import React from 'react';
import ReactDOM from 'react-dom';
import { todaysDate } from './DateString';

export class GetVenues extends React.Component {
  render() {
    return (
      <div>
        Venues.js test: {this.props.location}
      </div>
    );
  };
}

/*

const clientId = 'MLBEDKSFHOZLTD3Q4XPD03DRXK20KAAHDT2SBJLL4ZFFX0WH';
const clientSecret = '04DFXWA5BTEEBPGAEZDV0GBH53XY4R4XJ2O53MNVIL0MH3IE';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';
const imgPrefix = 'https://igx.4sqi.net/img/general/150x200';

const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDivs = [$("#weather1"), $("#weather2"), $("#weather3"), $("#weather4")];
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

async function originalGetVenues() {
  const cityToLand = $input.val();
  const urlToFetch = url + cityToLand + '&venuePhotos=1&limit=10&client_id=' +
    clientId + '&client_secret=' + clientSecret + '&v=' + todaysDate;

  try {
    let response = await fetch(urlToFetch);
    if (response.ok) {
      let jsonResponse = await response.json();
      let venues = jsonResponse.response.groups[0].items.map(spot => spot.venue);
      return venues;
    }
  } catch (error) {
    console.log(error);
  }
}

*/
