import React from 'react';
import Comment from './Comment.jsx';

const App = () => {
	return (
		<Comment
			author={{
				avatarUrl: 'https://avatars.githubusercontent.com/u/19282412?v=4',
				name: 'Bob',
			}}
			text='Lorem Ipsum'
			date={new Date()}
		/>
	);
};

export default App;
