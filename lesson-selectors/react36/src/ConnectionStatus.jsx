import React from 'react';

export default class ConnectionStatus extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOnline: true,
		};
	}

	componentDidMount() {
		window.addEventListener('online', () => this.onOnline(true));
		window.addEventListener('offline', () => this.onOnline(false));
	}

	componentWillUnmount() {
		window.removeEventListener(['online', 'offline'], () => this.onOnline);
	}

	onOnline(status) {
		this.setState({ isOnline: status });
	}

	render() {
		return this.state.isOnline ? (
			<div className='status'>online</div>
		) : (
			<div className='status status_offline'>offline</div>
		);
	}
}
