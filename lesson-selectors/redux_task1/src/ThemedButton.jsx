import React, { useContext } from 'react';
import { ThemeContext } from './themes';

const ThemedButton = ({ children, onToggle }) => {
	const theme = useContext(ThemeContext);
	return (
		<button
			onClick={onToggle}
			className='btn'
			style={{
				backgroundColor: theme.background,
				color: theme.fontColor,
			}}>
			{children}
		</button>
	);
};

export default ThemedButton;
