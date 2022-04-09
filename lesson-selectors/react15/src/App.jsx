import React from 'react';
import Counter from './Counter.jsx';

const App = () => {
	return (
		<>
			<Counter start={1} interval={1000} />
			<Counter start={12} interval={1500} />
			<Counter start={33} interval={2000} />
		</>
	);
};

export default App;
