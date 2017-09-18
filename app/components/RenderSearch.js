import React from 'react';
import ReactDOM from 'react-dom';
import { ExecuteSearch } from './CitySearch'


export class RenderSearch extends React.Component {
  render() {
    return (
      <div>
          <div>RenderSearch.js</div>
          <ExecuteSearch />
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

export function renderSearch() {
  render() {
    return (
      <div>
        <h1>lets go somewhere new</h1>
        <form autocomplete="off">
          <input type="text" id="city" placeholder="> What city would you like to see?">
          <button id="button" type="submit">explore</button>
        </form>
      </div>
    );
  };
};

*/
