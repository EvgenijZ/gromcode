import React, { useContext } from 'react';
import { UserContext } from './user.js';
const UserMenu = () => {
	const { userData } = useContext(UserContext);
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
};

export default UserMenu;
