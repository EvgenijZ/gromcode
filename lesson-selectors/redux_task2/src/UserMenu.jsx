import React, { useContext } from 'react';
import { UserContext } from './user.js';
const UserMenu = () => {
	const { name, avatar_url } = useContext(UserContext);
	return (
		<div className='menu'>
			<span className='menu__greeting'>Hello, {name}</span>
			<img alt='User Avatar' src={avatar_url} className='menu__avatar' />
		</div>
	);
};

export default UserMenu;
