import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UsersList from './users/UsersList.jsx';

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<UsersList />
			</Provider>
		);
	}
}

export default App;
