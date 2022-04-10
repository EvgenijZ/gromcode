import React from 'react';
import moment from 'moment';

export default class Transaction extends React.Component {
	render() {
		const { from, to, amount, rate, time } = this.props;

		return (
			<li className='transaction'>
				<span className='transaction__date'>
					{moment(time).format('D MMM')}
				</span>
				<span className='transaction__time'>
					{moment(time).format('HH:mm')}
				</span>
				<span className='transaction__assets'>{`${from} → ${to}`}</span>
				<span className='transaction__rate'>{rate}</span>
				<span className='transaction__amount'>
					{new Intl.NumberFormat('en-GB').format(amount)}
				</span>
			</li>
		);
	}
}
