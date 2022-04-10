import React from 'react';

class Login extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button className='btn login' onClick={() => this.props.onLogin()}>
				Login
			</button>
		);
	}
}

export default Login;
