import React from 'react';
import ReactDOM from 'react-dom';
import { RenderSearch } from './RenderSearch';
import { RenderForecast } from './RenderForecast';
import { RenderVenues } from './RenderVenues';

export class App extends React.Component {
render() {
	return (
    <div>
	    <main>
				<RenderSearch />
			</main>

	    <div className="not-container">
				<RenderForecast />
				<RenderVenues />
			</div>
    </div>
	)}
}
