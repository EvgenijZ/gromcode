import React from 'react';
import AvailableOption from './AvailableOption.jsx';
import SelectedOption from './SelectedOption.jsx';

const TransferList = () => {
	return (
		<div className='transfer-list'>
			<AvailableOption />
			<SelectedOption />
		</div>
	);
};

export default TransferList;
