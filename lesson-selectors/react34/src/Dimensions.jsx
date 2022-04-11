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
		this.setDimensions();
		window.addEventListener('resize', this.setDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.setDimensions);
	}

	setDimensions(e) {
		this.setState({ width: e.target.innerWidth, height: e.target.innerHeight });
		document.title = `${this.state.width} x ${this.state.height}`;
	}

	render() {
		return (
			this.state.width && (
				<div>{`${this.state.width} x ${this.state.height}`}</div>
			)
		);
	}
}
