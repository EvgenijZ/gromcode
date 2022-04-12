import React from 'react';

class EvenNumbers extends React.Component {
	shouldComponentUpdate(nextProps) {
		return nextProps.number !== this.props.number;
	}

	render() {
		return (
			<div className='number'>
				<span className='number__title'>{this.props.title}</span>
				<span className='number__value'>{this.props.number}</span>
			</div>
		);
	}
}

export default EvenNumbers;
