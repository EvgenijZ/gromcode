import React from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';

const Users = ({ users, addUser, deleteUser }) => {
	return (
		<div className='users'>
			<button
				className='users__create-btn'
				onClick={() =>
					addUser({
						id: Math.floor(Math.random() * 1000000),
						name: 'Jane',
					})
				}>
				Create user
			</button>
			<ul className='users__list'>
				{users.map(({ id }) => {
					return (
						<li key={id} className='users__list-item'>
							<span>User # {id}</span>
							<button
								className='users__delete-btn'
								onClick={() => deleteUser(id)}>
								+
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

const mapState = (state) => {
	return { users: state.usersList };
};

const mapDispatch = {
	addUser: usersActions.addUser,
	deleteUser: usersActions.deleteUser,
};

export default connect(mapState, mapDispatch)(Users);
