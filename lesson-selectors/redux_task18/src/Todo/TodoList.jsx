import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ children }) => {
	return <ul className='list'>{children}</ul>;
};

export default TodoList;

TodoList.propTypes = {
	children: PropTypes.array,
};

TodoList.defaultProps = {
	children: [],
};
