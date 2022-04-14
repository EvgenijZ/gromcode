import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import User from './User.jsx';

export default class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className='page'>
					<div className='page__content'>
						<h1>Users</h1>
						<ul className='navigation'>
							<li className='navigation__item'>
								<Link to='/users/github'>Github</Link>
							</li>
							<li className='navigation__item'>
								<Link to='/users/facebook'>Facebook</Link>
							</li>
						</ul>

						<Route exact path='/'>
							<span>Select a user please</span>
						</Route>
						<Route path='/users/:userId'>
							<User />
						</Route>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}
