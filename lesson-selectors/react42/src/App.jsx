import React from 'react';
import UserProfile from './UserProfile.jsx';
import UserMenu from './UserMenu.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null,
		};
	}

	fetchUser() {
		fetch(' https://api.github.com/users/facebook')
			.then((response) => response.json())
			.then((user) => this.setState({ user }));
	}

	componentDidMount() {
		this.fetchUser();
	}

	render() {
		return (
			<div className='page'>
				<header className='header'>
					<UserMenu userData={this.state.user} />
				</header>
				<UserProfile userData={this.state.user} />
			</div>
		);
	}
}

export default App;
