import React from 'react';
import { GetVenues } from './Venues'

export class RenderVenues extends React.Component {
  render() {
    return (
      <div>
          <div>RenderVenues.js test: {this.props.location}</div>
          <GetVenues location={this.props.location} />
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

export function originalRenderVenues(venues) {
  $venueDivs.forEach(($venue) => {
    let randNum = Math.floor(Math.random() * 9);
    let formattedAddress = venues[randNum].name + " " + venues[randNum].location.address + " " + venues[randNum].location.city;
    let urlAddress = formattedAddress.replace(/ /g, "+");
    let venueContent =
      '<h2>' + venues[randNum].name + '</h2>' +
      '<img class="venueimage" src="' + imgPrefix +
      venues[randNum].photos.groups[0].items[0].suffix + '"/>' +
      '<h3><br />Address:</h3>' +
          '<a href="https://google.com/maps/place/' + urlAddress + '" target="_blank">' +
      '<p>' + venues[randNum].location.address + '</p>' +
      '<p>' + venues[randNum].location.city + '</p>' +
      '<p>' + venues[randNum].location.country + '</p>' +
          '</a>';

    $venue.append(venueContent);
    venues.splice(randNum,1);
  });
  $destination.append('<h2>' + venues[0].location.city + '</h2>');
}

///////////////////////////

<div class="sectiontitle">
  <h2>TOP ATTRACTIONS</h2>
</div>
<section id="venues">
  <div class="venue" id="venue1">

  </div>
  <div class="venue" id="venue2">

  </div>
  <div class="venue" id="venue3">

  </div>
</section>

*/
