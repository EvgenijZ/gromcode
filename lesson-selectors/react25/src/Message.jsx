import React from 'react';

const Message = ({ text }) => {
	return text && <div className='message'>{text}</div>;
};

export default Message;
