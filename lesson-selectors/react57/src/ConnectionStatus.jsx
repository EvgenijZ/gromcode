import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
	const [online, setOnline] = useState(true);

	useEffect(() => {
		window.addEventListener('online', () => setOnline(true));
		window.addEventListener('offline', () => setOnline(false));

		return () => {
			window.removeEventListener('online', () => setOnline);
			window.removeEventListener('offline', () => setOnline);
		};
	}, []);

	return online ? (
		<div className='status'>online</div>
	) : (
		<div className='status status_offline'>offline</div>
	);
};

export default ConnectionStatus;
