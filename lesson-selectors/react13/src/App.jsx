import React from 'react';
import Greeting from './Greeting.jsx';

const App = () => {
	return (
		<Greeting
			firstName='John'
			lastName='Doe'
			birthDate={new Date('1993, 02, 12')}
		/>
	);
};

export default App;
