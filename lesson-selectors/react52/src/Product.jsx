import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
	const { slug } = useParams();
	return <div className='product'>{slug}</div>;
};

export default Product;
