import React from 'react';
import Message from './Message.jsx';
import Page from './Page.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			message: null,
		};

		this.setMessage = this.setMessage.bind(this);
	}

	setMessage(message) {
		this.setState({ message: message });
	}

	render() {
		return (
			<div className='page'>
				<Message text={this.state.message} />
				<Page changeMessage={this.setMessage} />
			</div>
		);
	}
}

export default App;
