import React from 'react';

class Logout extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button className='btn logout' onClick={() => this.props.onLogout()}>
				Logout
			</button>
		);
	}
}

export default Logout;
