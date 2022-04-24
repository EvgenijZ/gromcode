import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UserInfo from './users/UserInfo.jsx';
import Spinner from './users/Spinner.jsx';
import SearchField from './users/SearchField.jsx';

const App = () => {
	return (
		<div className='page'>
			<Provider store={store}>
				<UserInfo />
				<Spinner />
				<SearchField />
			</Provider>
		</div>
	);
};

export default App;
