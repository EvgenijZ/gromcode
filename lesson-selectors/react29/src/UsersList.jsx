import React from 'react';
import User from './User.jsx';

const users = [
	{
		id: 'id-0',
		age: 21,
		name: 'Bob',
	},
	{
		id: 'id-1',
		age: 17,
		name: 'Tom',
	},
	{
		id: 'id-2',
		age: 18,
		name: 'Tad',
	},
	{
		id: 'id-3',
		age: 45,
		name: 'Sam',
	},
];

export default class UsersList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			sort: null,
		};
	}

	toggleSorting() {
		this.setState({ sort: this.state.sort === 'asc' ? 'desc' : 'asc' });
	}

	render() {
		let usersList;

		if (this.state.sort) {
			usersList = [...users].sort((a, b) =>
				this.state.sort === 'asc' ? a.age - b.age : b.age - a.age
			);
		} else {
			usersList = users;
		}

		return (
			<div>
				<button className='btn' onClick={() => this.toggleSorting()}>
					{this.state.sort || '-'}
				</button>

				<ul className='users'>
					{usersList.map((user) => (
						<User key={user.id} {...user} />
					))}
				</ul>
			</div>
		);
	}
}
