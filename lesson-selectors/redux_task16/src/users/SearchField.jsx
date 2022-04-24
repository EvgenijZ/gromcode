import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';

const SearchField = ({ getUser }) => {
	const [query, setQuery] = useState('');
	return (
		<div className='name-form'>
			<input
				type='text'
				className='name-form__input'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button className='name-form__btn btn' onClick={() => getUser(query)}>
				Show
			</button>
		</div>
	);
};

const mapDispatch = {
	getUser: usersActions.fetchUserData,
};

export default connect(null, mapDispatch)(SearchField);
