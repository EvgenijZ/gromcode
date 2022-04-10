import React from 'react';
import Transaction from './Transaction.jsx';

export default class TransactionsList extends React.Component {
	render() {
		return (
			<ul className='transactions'>
				{this.props.transactions.map((transaction) => (
					<Transaction key={transaction.id} {...transaction} />
				))}
			</ul>
		);
	}
}
