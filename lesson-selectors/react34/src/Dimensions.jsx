import React from 'react';

export default class Dimensions extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			width: null,
			height: null,
		};

		this.setDimensions = this.setDimensions.bind(this);
	}

	componentDidMount() {
		const { innerWidth, innerHeight } = window;
		this.setDimensions(innerWidth, innerHeight);

		window.addEventListener('resize', () =>
			this.setDimensions(innerWidth, innerHeight)
		);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.setDimensions);
	}

	setDimensions(width, height) {
		this.setState({ width, height });
		document.title = `${width} x ${height}`;
	}

	render() {
		return (
			this.state.width && (
				<div className='dimensions'>{`${this.state.width}px - ${this.state.height}px`}</div>
			)
		);
	}
}
