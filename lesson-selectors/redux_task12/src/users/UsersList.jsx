import React from 'react';
import { connect } from 'react-redux';
import User from './User.jsx';
import Pagination from './Pagination.jsx';
import * as usersActions from './users.actions';
import { usersSelector, currentPageSelector } from './users.selectors';

const UsersList = ({ users, currentPage, prevPage, nextPage }) => {
	const itemsPerPage = 3;
	let startIndex = currentPage * itemsPerPage;
	const showedUsers = users
		.slice(startIndex, itemsPerPage + startIndex)
		.map(({ id, ...user }) => <User key={id} {...user} />);
	return (
		<div>
			<Pagination
				totalItems={users.length}
				itemsPerPage={itemsPerPage}
				currentPage={currentPage + 1}
				goPrev={prevPage}
				goNext={nextPage}
			/>
			<ul className='users'>{showedUsers}</ul>
		</div>
	);
};

const mapState = (state) => {
	return {
		users: usersSelector(state),
		currentPage: currentPageSelector(state),
	};
};

const mapDispatch = {
	prevPage: usersActions.prevPage,
	nextPage: usersActions.nextPage,
};

export default connect(mapState, mapDispatch)(UsersList);
