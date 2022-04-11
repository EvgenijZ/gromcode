import React from 'react';

export default class Life extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			updateCounter: 0,
		};

		console.log('constructor: good place to create state');
	}

	componentDidMount() {
		console.log('componentDidMount: API calls, subscriptions');
		this.updateCounter();
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (nextState.updateCounter > 0)
			console.log(
				'shouldComponentUpdate(nextProps, nextState): decide to render or not to render'
			);
		return true;
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.updateCounter > 0)
			console.log(
				'componentDidUpdate(prevProps, prevState): some updates based on new props'
			);
	}

	componentWillUnmount() {
		console.log(
			'componentWillUnmount(): cleanup before DOM related to component will be removed'
		);
	}

	updateCounter() {
		setInterval(
			() => this.setState({ updateCounter: this.state.updateCounter + 1 }),
			2000
		);
	}

	render() {
		console.log('return React element to build DOM');
		return this.state.updateCounter < 3 && <div>123</div>;
	}
}
