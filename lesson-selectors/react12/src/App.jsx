import React from 'react';
import Comment from './Comment.jsx';

const App = () => {
	return (
		<Comment
			user={{
				avatarUrl: 'https://avatars.githubusercontent.com/u/19282412?v=4',
				name: 'Bob',
			}}
		/>
	);
};

export default App;
