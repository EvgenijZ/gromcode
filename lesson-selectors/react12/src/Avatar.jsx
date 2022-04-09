import React from 'react';

const Avatar = (props) => {
	return <img className='avatar' src={props.avatar} alt={props.name} />;
};

export default Avatar;
