import React from 'react';
import User from './User.jsx';

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
			usersList = [...this.props.users].sort((a, b) =>
				this.state.sort === 'asc' ? a.age - b.age : b.age - a.age
			);
		} else {
			usersList = this.props.users;
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
