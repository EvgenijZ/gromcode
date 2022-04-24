import React from 'react';
import TransferList from './options/TransferList.jsx';
import store from './store.js';
import { Provider } from 'react-redux';

const App = () => {
	return (
		<Provider store={store}>
			<TransferList />
		</Provider>
	);
};

export default App;
