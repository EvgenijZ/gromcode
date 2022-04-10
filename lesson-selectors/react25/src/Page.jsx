import React from 'react';
import Message from './Message.jsx';

const Page = (props) => {
	return (
		<div className='page'>
			{props.text && <Message text={props.text} />}
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
		</div>
	);
};

export default Page;
