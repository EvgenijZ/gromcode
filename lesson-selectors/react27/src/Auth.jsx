import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

class Auth extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: false,
			showSpinner: false,
		};

		this.setStatusLogin = this.setStatusLogin.bind(this);
	}

	setStatusLogin(status) {
		if (status) this.showSpinner();
		this.setState({ isLoggedIn: status });
	}

	showSpinner() {
		this.setState({ showSpinner: true });
		setTimeout(() => this.hideSpinner(), 2000);
	}

	hideSpinner() {
		this.setState({ showSpinner: false });
	}

	render() {
		return (
			<div>
				{this.state.showSpinner && <Spinner size={30} />}
				{this.state.isLoggedIn && !this.state.showSpinner && (
					<Logout onLogout={() => this.setStatusLogin(false)} />
				)}
				{!this.state.isLoggedIn && !this.state.showSpinner && (
					<Login onLogin={() => this.setStatusLogin(true)} />
				)}
			</div>
		);
	}
}
export default Auth;
