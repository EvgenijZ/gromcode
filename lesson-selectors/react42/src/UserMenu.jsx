import React from 'react';

export default class UserMenu extends React.Component {
	render() {
		if (!this.props.userData) return null;
		const { userData } = this.props;

		return (
			<div className='menu'>
				<span className='menu__greeting'>Hello, {userData.name}</span>
				<img
					alt='User Avatar'
					src={userData.avatar_url}
					className='menu__avatar'
				/>
			</div>
		);
	}
}
