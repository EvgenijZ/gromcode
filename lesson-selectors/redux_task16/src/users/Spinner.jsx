import React from 'react';
import { connect } from 'react-redux';
import { getSpinnerSelector } from './users.selectors';

const Spinner = ({ isShow }) => {
	return isShow && <span className='spinner'></span>;
};

const mapState = (state) => {
	return {
		isShow: getSpinnerSelector(state),
	};
};

export default connect(mapState)(Spinner);
