import React from 'react';
import OddNumbers from './OddNumbers.jsx';
import EvenNumbers from './EvenNumbers.jsx';
import Numbers from './Numbers.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0,
		};
	}

	componentDidMount() {
		this.incrementCounter();
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	incrementCounter() {
		this.timerId = setInterval(
			() => this.setState({ counter: this.state.counter + 1 }),
			1000
		);
	}

	render() {
		return (
			<div className='app'>
				<OddNumbers title='Odd number' number={this.state.counter} />
				<EvenNumbers title='Even number' number={this.state.counter} />
				<Numbers title='All numbers' number={this.state.counter} />
				<Numbers title='Just 17' number={this.state.counter} />
			</div>
		);
	}
}

export default App;
