import React from 'react';
import { connect } from 'react-redux';
import User from './User.jsx';
import Filter from '../Filter.jsx';
import * as usersActions from './users.actions';
import { sortedUsers, sortedFilteredUsers } from './users.selectors';

const UsersList = ({ users, filteredUsers, filterText, queryUsers }) => {
	const getUsers = () =>
		filterText.length || filteredUsers.length ? filteredUsers : users;
	return (
		<div>
			<Filter
				filterText={filterText}
				count={getUsers().length}
				onChange={queryUsers}
			/>
			<ul className='users'>
				{getUsers().map(({ id, name, age }) => (
					<User key={id} name={name} age={age} />
				))}
			</ul>
		</div>
	);
};

const mapState = (state) => {
	return {
		users: sortedUsers(state),
		filterText: state.filterText,
		filteredUsers: sortedFilteredUsers(state),
	};
};

const mapDispatch = {
	queryUsers: usersActions.queryUsers,
};

export default connect(mapState, mapDispatch)(UsersList);
