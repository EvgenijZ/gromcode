import React from 'react';

class ColorPicker extends React.Component {
	colors = ['Red', 'coral', 'aqua', 'bisque'];

	constructor(props) {
		super(props);

		this.state = {
			color: this.colors[0],
		};
	}

	printColorName(color) {
		this.setState({ color: color });
	}

	resetColorName() {
		this.setState({ color: '' });
	}

	render() {
		return (
			<div>
				<div className='picker__title'>{this.state.color}</div>
				<div>
					<button
						className='picker__button picker__button_coral'
						style={{ backgroundColor: this.colors[1] }}
						onMouseEnter={() => this.printColorName(this.colors[1])}
						onMouseLeave={() => this.resetColorName()}></button>
					<button
						className='picker__button picker__button_aqua'
						style={{ backgroundColor: this.colors[2] }}
						onMouseEnter={() => this.printColorName(this.colors[2])}
						onMouseLeave={() => this.resetColorName()}></button>
					<button
						className='picker__button picker__button_bisque'
						style={{ backgroundColor: this.colors[3] }}
						onMouseEnter={() => this.printColorName(this.colors[3])}
						onMouseLeave={() => this.resetColorName()}></button>
				</div>
			</div>
		);
	}
}

export default ColorPicker;
