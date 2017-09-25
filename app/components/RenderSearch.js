import React from 'react';
import ReactDOM from 'react-dom';
import { Search } from './Search'

export class RenderSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  handleSubmit(e) {
  let newLocation = this.props.location;
  e.preventDefault();
  this.props.onChange(newLocation);
  };

  render() {
    return (
      <div>
        <div>
          <h1>let&rsquo;s go somewhere new</h1>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <input type="text" id="city"
            placeholder="> What city would you like to see?"
            value={this.props.location}
            onChange={this.handleChange}
            />
              <button id="button" type="submit">explore</button>
          </form>
        </div>
        <Search location={this.props.location} />
      </div>
    );
  };
};
