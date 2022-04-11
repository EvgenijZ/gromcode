import React from 'react';
import Clock from './Clock.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			show: true,
		};
	}

	hideClock() {
		this.setState({ show: false });
	}

	render() {
		return (
			<>
				{this.state.show && (
					<>
						<Clock offset={0} location='London' />
						<Clock offset={2} location='Kyiv' />
						<Clock offset={-5} location='New York' />
					</>
				)}
				<button onClick={() => this.hideClock()}>Hide clock</button>
			</>
		);
	}
}

export default App;
