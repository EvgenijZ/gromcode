import React from 'react';
import { UserContext } from './user.js';

class UserMenu extends React.Component {
	render() {
		return (
			<div className='menu'>
				<span className='menu__greeting'>{`Hello, ${this.context.name}`}</span>
				<img
					className='menu__avatar'
					src={`${this.context.avatar_url}`}
					alt='User Avatar'
				/>
			</div>
		);
	}
}

UserMenu.contextType = UserContext;

export default UserMenu;
