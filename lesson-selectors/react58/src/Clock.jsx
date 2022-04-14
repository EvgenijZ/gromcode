import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './clock.scss';

const getTimeWithOffset = (offset) => {
	const currentTime = new Date();
	const utcOffset = currentTime.getTimezoneOffset() / 60;
	return new Date(
		currentTime.setHours(currentTime.getHours() + offset + utcOffset)
	);
};

const Clock = ({ offset, location }) => {
	const formatTime = (offset) =>
		moment(getTimeWithOffset(offset)).format('HH:mm:ss A');

	const [time, setTime] = useState(formatTime(offset));

	useEffect(() => {
		const intervalId = setInterval(() => setTime(formatTime(offset)), 1000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className='clock'>
			<div className='clock__location'>{location}</div>
			<div className='clock__time'>{time}</div>
		</div>
	);
};

export default Clock;
