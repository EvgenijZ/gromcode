import React from 'react';
import { Link, Route } from 'react-router-dom';
import Product from './Product.jsx';

const Products = () => {
	return (
		<div className='page__content'>
			<h1>Products</h1>
			<ul className='navigation'>
				<li className='navigation__item'>
					<Link to='/products/book'>Book</Link>
				</li>
				<li className='navigation__item'>
					<Link to='/products/ball'>Ball</Link>
				</li>
			</ul>

			<Route exact path='/products'>
				<span>Select a product please</span>
			</Route>
			<Route path='/products/:slug'>
				<Product />
			</Route>
		</div>
	);
};

export default Products;
