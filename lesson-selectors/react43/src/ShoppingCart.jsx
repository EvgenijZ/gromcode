import React from 'react';
import CartTitle from './CartTitle.jsx';
import ProductsList from './ProductsList.jsx';

export default class ShoppingCart extends React.Component {
	render() {
		return (
			<div className='column'>
				<CartTitle firstName={this.props.firstName} />
				<ProductsList cartItems={this.props.cartItems} />
			</div>
		);
	}
}
