import React from 'react';
import Message from './Message.jsx';

class Page extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			message: null,
		};
	}

	setMessage(message) {
		this.setState({ message: message });
	}
	render() {
		return (
			<div className='page'>
				{this.state.message && <Message text={this.state.message} />}
				<div className='actions'>
					<button
						className='btn'
						onClick={() => this.setMessage('Hello, world!')}>
						Text 1
					</button>
					<button
						className='btn'
						onClick={() => this.setMessage('Another exciting text.')}>
						Text 2
					</button>
					<button className='btn' onClick={() => this.setMessage(null)}>
						Clear
					</button>
				</div>
			</div>
		);
	}
}

export default Page;
