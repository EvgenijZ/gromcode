import React from 'react';
import Offline from './Offline.jsx';
import Online from './Online.jsx';

export default class Status extends React.Component {
	render() {
		return (
			<div className='status'>
				<Online isOnline={false} />
				<Offline isOffline={true} />
			</div>
		);
	}
}
