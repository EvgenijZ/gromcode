import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Products from './Products.jsx';
import PageNotFound from './PageNotFound.jsx';

export default class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className='page'>
					<ul className='navigation'>
						<li className='navigation__item'>
							<Link to='/'>Home</Link>
						</li>
						<li className='navigation__item'>
							<Link to='/products'>Products</Link>
						</li>
					</ul>

					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>

						<Route path='/products'>
							<Products />
						</Route>

						<Route path='*'>
							<PageNotFound />
						</Route>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}
