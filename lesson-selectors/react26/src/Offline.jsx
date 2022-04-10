import React from 'react';

export default class Offline extends React.Component {
	render() {
		return (
			!this.props.isOffline && (
				<>
					<span className='status__text'>Offline</span>
					<button className='status__btn'>Reconnect</button>
				</>
			)
		);
	}
}
