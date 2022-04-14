import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Products from './Products.jsx';
import Contacts from './Contacts.jsx';
import PageNotFound from './PageNotFound.jsx';

export default class App extends React.Component {
	render() {
		return (
			<div className='page'>
				<BrowserRouter>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>

						<Route path='/products'>
							<Products />
						</Route>

						<Route path='/contacts'>
							<Contacts />
						</Route>

						<Route path='*'>
							<PageNotFound />
						</Route>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}
