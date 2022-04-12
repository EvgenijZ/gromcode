import React from 'react';
import Dialog from './Dialog.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
		};

		this.toggleDialog = this.toggleDialog.bind(this);
	}

	toggleDialog() {
		this.setState({ isOpen: !this.state.isOpen });
	}

	render() {
		return (
			<div className='app'>
				<button className='btn' onClick={() => this.toggleDialog()}>
					Show dialog
				</button>

				{this.state.isOpen && (
					<Dialog title='Demo title' onClose={this.toggleDialog}>
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
