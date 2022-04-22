import React from 'react';

export const themes = {
    light: { fontColor: '#ffffff', background: '#222222' },
    dark: { fontColor: '#000000', background: '#eeeeee' }
};

export const ThemeContext = React.createContext(themes.light);