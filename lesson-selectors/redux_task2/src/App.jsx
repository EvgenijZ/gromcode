import React, { useState } from 'react';
import Header from './Header.jsx';
import { UserContext } from './user.js';

const App = () => {
	const [user, setUser] = useState({
		userData: {
			name: 'Nikola Tesla',
			avatar_url: 'https://avatars3.githubusercontent.com/u10001',
		},
	});
	return (
		<UserContext.Provider value={user}>
			<div className='page'>
				<Header />
			</div>
		</UserContext.Provider>
	);
};

export default App;
