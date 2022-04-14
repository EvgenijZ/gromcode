import React, { useEffect, useState } from 'react';

const Dimensions = () => {
	const [dimensions, setDimensions] = useState({});

	useEffect(() => {
		window.addEventListener('resize', onResize);
		const { innerWidth, innerHeight } = window;
		setDimensions({ width: innerWidth, height: innerHeight });
		document.title = `${innerWidth} x ${innerHeight}`;

		return () => window.removeEventListener('resize', onResize);
	}, []);

	const onResize = (e) => {
		const { innerWidth, innerHeight } = e.target;
		setDimensions({ width: innerWidth, height: innerHeight });
		document.title = `${innerWidth} x ${innerHeight}`;
	};

	return (
		<div className='dimensions'>{`${dimensions.width}px - ${dimensions.height}px`}</div>
	);
};

export default Dimensions;
