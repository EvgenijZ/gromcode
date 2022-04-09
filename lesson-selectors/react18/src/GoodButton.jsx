import React from 'react';

class GoodButton extends React.Component {
	showAlert(e) {
		const buttonText = e.target.textContent;
		alert(buttonText);
	}

	render() {
		return (
			<button className='fancy-button' onClick={this.showAlert}>
				Click
			</button>
		);
	}
}

export default GoodButton;
