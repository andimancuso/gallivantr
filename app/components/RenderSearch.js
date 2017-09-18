import React from 'react';
import ReactDOM from 'react-dom';
import { Search } from './Search'

export class RenderSearch extends React.Component {
  render() {
    return (
      <div>
      <div>
        <h1>lets go somewhere new</h1>
        <form autocomplete="off">
          <input type="text" id="city" placeholder="> What city would you like to see?" />
          <button id="button" type="submit">explore</button>
        </form>
      </div>
          <Search />
      </div>
    );
  };
};
