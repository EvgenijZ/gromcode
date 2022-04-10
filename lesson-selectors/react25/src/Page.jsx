import React from 'react';

const Page = (props) => {
	return (
		<div className='actions'>
			<button
				className='btn'
				onClick={() => props.changeMessage('Hello, world!')}>
				Text 1
			</button>
			<button
				className='btn'
				onClick={() => props.changeMessage('Another exciting text.')}>
				Text 2
			</button>
			<button className='btn' onClick={() => props.changeMessage(null)}>
				Clear
			</button>
		</div>
	);
};

export default Page;
