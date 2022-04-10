import React from 'react';
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
		return <Page text={this.state.message} changeMessage={this.setMessage} />;
	}
}

export default App;
