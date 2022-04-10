import React from 'react';

export default class NumbersList extends React.Component {
	render() {
		return (
			<ul>
				{this.props.numbers.map((number, index) => {
					return <li key={index}>{number}</li>;
				})}
			</ul>
		);
	}
}
