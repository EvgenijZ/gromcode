import React from 'react';

export default class ProductsList extends React.Component {
	render() {
		const { cartItems } = this.props;
		const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

		return (
			<div className='products'>
				<ul className='products__list'>
					{cartItems.map((cartItem) => {
						return (
							<li key={cartItem.id} className='products__list-item'>
								<span className='products__item-name'>{cartItem.name}</span>
								<span className='products__item-price'>${cartItem.price}</span>
							</li>
						);
					})}
				</ul>
				<div className='products__total'>Total: ${cartTotal}</div>
			</div>
		);
	}
}
