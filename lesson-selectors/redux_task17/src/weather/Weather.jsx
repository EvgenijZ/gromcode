import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as weatherActions from './weather.actions';
import { weatherSelector } from './weather.selector';

const Weather = ({ getWeatherData, cities }) => {
	useEffect(() => {
		getWeatherData();
	}, [getWeatherData]);

	return (
		<main className='weather'>
			<h1 className='weather__title'>Weather data</h1>
			<ul className='cities-list'>
				{cities &&
					cities.map(({ id, name, temperature }) => {
						return (
							<li key={id} className='city'>
								<span className='city__name'>{name}</span>
								<span className='city__temperature'>{temperature}</span>
							</li>
						);
					})}
			</ul>
		</main>
	);
};

const mapState = (state) => {
	return {
		cities: weatherSelector(state),
	};
};

const mapDispatch = {
	getWeatherData: weatherActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
