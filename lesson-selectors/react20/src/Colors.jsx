import React from 'react';

class Colors extends React.Component {
	colors = ['#f00', '#0f0', '#00f'];

	setBackgroundColor(color) {
		document.body.style.backgroundColor = color;
	}

	render() {
		return (
			<div className='colors'>
				<button
					className='colors__button'
					style={{ backgroundColor: this.colors[0] }}
					onClick={() => this.setBackgroundColor(this.colors[0])}></button>
				<button
					className='colors__button'
					style={{ backgroundColor: this.colors[1] }}
					onClick={() => this.setBackgroundColor(this.colors[1])}></button>
				<button
					className='colors__button'
					style={{ backgroundColor: this.colors[2] }}
					onClick={() => this.setBackgroundColor(this.colors[2])}></button>
			</div>
		);
	}
}

export default Colors;
