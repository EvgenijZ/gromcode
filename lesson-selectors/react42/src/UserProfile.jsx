import React from 'react';

export default class UserProfile extends React.Component {
	render() {
		if (!this.props.userData) return null;
		const { userData } = this.props;

		return (
			<div className='user'>
				<img
					alt='User Avatar'
					src={userData.avatar_url}
					className='user__avatar'
				/>
				<div className='user__info'>
					<span className='user__name'>{userData.name}</span>
					<span className='user__location'>{userData.location}</span>
				</div>
			</div>
		);
	}
}
