import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Search from './Search.jsx';

const rootEl = document.querySelector('#root');
ReactDOM.render(<Search name='Tom' />, rootEl);
