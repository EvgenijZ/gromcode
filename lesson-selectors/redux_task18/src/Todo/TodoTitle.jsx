import React from 'react';
import PropTypes from 'prop-types';

const TodoTitle = ({ title }) => {
	return <h1 className='title'>{title}</h1>;
};

export default TodoTitle;

TodoTitle.propTypes = {
	title: PropTypes.string,
};

TodoTitle.defaultProps = {
	title: 'Todo list',
};
