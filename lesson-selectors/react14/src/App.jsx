import React from 'react';
import Profile from './Profile.jsx';

const App = () => {
	return (
		<Profile
			userData={{
				firstName: 'James',
				lastName: 'Bond',
				birthDate: '1991-01-17T11:11:11.819Z',
				birthPlace: 'London',
			}}
		/>
	);
};

export default App;
