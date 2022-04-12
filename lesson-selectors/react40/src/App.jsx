import React from 'react';
import UsersList from './UsersList.jsx';

const users = [
	{ id: 1, name: 'John', age: 20 },
	{ id: 2, name: 'Ann', age: 22 },
	{ id: 3, name: 'Joe', age: 30 },
	{ id: 4, name: 'Bob', age: 10 },
	{ id: 5, name: 'Mark', age: 40 },
	{ id: 6, name: 'Eugene', age: 29 },
];

class App extends React.Component {
	render() {
		return <UsersList users={users} />;
	}
}

export default App;
