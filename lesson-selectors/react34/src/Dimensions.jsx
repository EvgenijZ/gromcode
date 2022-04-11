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
		window.addEventListener('resize', this.setDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.setDimensions);
	}

	setDimensions(e) {
		this.setState({ width: e.target.innerWidth, height: e.target.innerHeight });
		document.title = `${this.state.height} x ${this.state.width}`;
	}

	render() {
		return (
			this.state.width && (
				<div className='dimensions'>{`${this.state.width}px - ${this.state.height}px`}</div>
			)
		);
	}
}
