import React from 'react';

export default class Online extends React.Component {
	render() {
		return this.props.isOnline && <div className='status__text'>All good!</div>;
	}
}
