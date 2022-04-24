import React from 'react';
import { connect } from 'react-redux';
import { getUserSelector } from './users.selectors';

const UserInfo = ({ user }) => {
	//const { avatar_url, name, location } = user;
	return (
		user && (
			<div className='user'>
				<img alt='User Avatar' src={user.avatar_url} className='user__avatar' />
				<div className='user__info'>
					<span className='user__name'>{user.name}</span>
					<span className='user__location'>{user.location}</span>
				</div>
			</div>
		)
	);
};

const mapState = (state) => {
	return {
		user: getUserSelector(state),
	};
};

export default connect(mapState)(UserInfo);
