import React from 'react';
import UserProfile from './UserProfile.jsx';
import UserMenu from './UserMenu.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userData: null,
		};
	}

	fetchUser() {
		fetch(`https://api.github.com/users/${this.props.userId}`)
			.then((response) => response.json())
			.then((userData) => this.setState({ userData }));
	}

	componentDidMount() {
		this.fetchUser();
	}

	render() {
		return (
			<div className='page'>
				<header className='header'>
					<UserMenu userData={this.state.userData} />
				</header>
				<UserProfile userData={this.state.userData} />
			</div>
		);
	}
}

export default App;
