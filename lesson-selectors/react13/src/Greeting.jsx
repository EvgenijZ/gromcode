import React from 'react';

const getAge = (date) => {
	const today = new Date();
	const birthDate = new Date(date);
	let age = today.getFullYear() - birthDate.getFullYear();
	const months = today.getMonth() - birthDate.getMonth();
	if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}
	return age;
};

const Greeting = (props) => {
	return (
		<div className='greeting'>{`My name is ${props.firstName} ${
			props.lastName
		}. I'm ${getAge(props.birthDate)} years old`}</div>
	);
};

export default Greeting;
