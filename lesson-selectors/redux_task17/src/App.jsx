import React from 'react';
import Weather from './weather/Weather.jsx';
import { Provider } from 'react-redux';
import store from './store.js';

const App = () => {
	return (
		<Provider store={store}>
			<Weather />
		</Provider>
	);
};

export default App;
