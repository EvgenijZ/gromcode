import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
	const [user, setUser] = useState({});

	const { userId } = useParams();

	const fetchUser = async (id) => {
		try {
			const response = await fetch(`https://api.github.com/users/${id}`);
			if (!response.ok) throw new Error(`Fetching ${id} failed`);
			return await response.json();
		} catch (error) {
			alert(error);
		}
	};

	useEffect(() => {
		fetchUser(userId)
			.then((user) => setUser(user))
			.catch((e) => console.error(e));
	}, [userId]);

	return (
		<div className='user'>
			<img alt='User Avatar' src={user.avatar_url} className='user__avatar' />
			<div className='user__info'>
				<span className='user__name'>{user.name}</span>
				<span className='user__location'>{user.location}</span>
			</div>
		</div>
	);
};

export default User;
