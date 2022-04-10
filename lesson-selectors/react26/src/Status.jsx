import React from 'react';
import Offline from './Offline.jsx';
import Online from './Online.jsx';

export default class Status extends React.Component {
	constructor(props) {
		super(props);
		this.isOnline = true;
	}

	render() {
		return (
			<div className='status'>{this.isOnline ? <Online /> : <Offline />}</div>
		);
	}
}
