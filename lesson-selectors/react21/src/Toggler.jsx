import React from 'react';

class Toggler extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			buttonStatus: 'Off',
		};
	}

	toggle() {
		this.setState({
			buttonStatus: this.state.buttonStatus === 'Off' ? 'On' : 'Off',
		});
	}

	render() {
		return (
			<button className='toggler' onClick={() => this.toggle()}>
				{this.state.buttonStatus}
			</button>
		);
	}
}

export default Toggler;
