import React from 'react';
import Greeting from './Greeting.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

class Auth extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: false,
		};

		this.setStatusLogin = this.setStatusLogin.bind(this);
	}

	setStatusLogin(status) {
		this.setState({ isLoggedIn: status });
	}

	render() {
		return (
			<div>
				<Greeting isLoggedIn={this.state.isLoggedIn} />
				{this.state.isLoggedIn ? (
					<Logout onLogout={this.setStatusLogin} />
				) : (
					<Login onLogin={this.setStatusLogin} />
				)}
			</div>
		);
	}
}
export default Auth;
