import React from 'react';
import ReactDOM from 'react-dom';
import { RenderSearch } from './RenderSearch';
import { RenderForecast } from './RenderForecast';
import { RenderVenues } from './RenderVenues';

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { location: 'NYC' };
	  this.changeLocation = this.changeLocation.bind(this);
	};

	changeLocation(newLocation) {
		this.setState({
			location: newLocation
		})
	};

render() {
	return (
    <div>
	    <main>
				<RenderSearch
				location={this.state.location}
				onChange={this.changeLocation}
				 />
			</main>

	    <div className="not-container">
				<RenderForecast location={this.state.location} />
				<RenderVenues location={this.state.location} />
			</div>
    </div>
	)}
}
