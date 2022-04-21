import React, { useState } from 'react';
import ThemedButton from './ThemedButton.jsx';
import { themes, ThemeContext } from './themes.js';

const App = () => {
	const [theme, setTheme] = useState(themes.light);
	const toggleTheme = () =>
		setTheme(themes.dark === theme ? themes.light : themes.dark);

	return (
		<>
			<ThemeContext.Provider value={theme}>
				<ThemedButton onToggle={toggleTheme}>Dynamic Theme</ThemedButton>
			</ThemeContext.Provider>
			<ThemedButton onToggle={toggleTheme}>Default Theme</ThemedButton>
		</>
	);
};

export default App;
