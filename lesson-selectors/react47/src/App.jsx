import React from 'react';
import Dialog from './Dialog.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
		};

		this.showDialog = this.showDialog.bind(this);
		this.hideDialog = this.hideDialog.bind(this);
	}

	showDialog() {
		this.setState({ isOpen: true });
	}

	hideDialog() {
		this.setState({ isOpen: false });
	}

	render() {
		return (
			<div className='app'>
				<button className='btn' onClick={() => this.showDialog()}>
					Show dialog
				</button>

				{this.state.isOpen && (
					<Dialog title='Demo title' onClose={this.hideDialog}>
						<p>
							Use immutable array methods to work with data. It will help to
							avoid bugs
						</p>
					</Dialog>
				)}
			</div>
		);
	}
}

export default App;
