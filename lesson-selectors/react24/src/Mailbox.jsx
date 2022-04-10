import React from 'react';

const Mailbox = (props) => {
	return (
		<div className='mailbox'>
			<span className='mailbox__text'>Messages</span>
			{props.unreadMessages.length > 0 && (
				<span className='mailbox__count'>{props.unreadMessages.length}</span>
			)}
		</div>
	);
};

export default Mailbox;
