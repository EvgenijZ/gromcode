import React from 'react';
import UserGreeting from './UserGreeting.jsx';
import GuestGreeting from './GuestGreeting.jsx';

const Greeting = ({ isLoggedIn }) => {
	return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
};

export default Greeting;
