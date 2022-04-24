import React from 'react';
import Counter from './Counter.jsx';
import { Provider } from 'react-redux';
import { store } from './store';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Counter />
			</Provider>
		);
	}
}
