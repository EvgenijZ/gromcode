import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Products from './Products.jsx';
import Contacts from './Contacts.jsx';
import PageNotFound from './PageNotFound.jsx';

export default class App extends React.Component {
	render() {
		return (
			<div className='page'>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/products' element={<Products />} />
						<Route path='/products' element={<Products />} />
						<Route path='/contacts' element={<Contacts />} />
						<Route path='*' element={<PageNotFound />} />
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}
