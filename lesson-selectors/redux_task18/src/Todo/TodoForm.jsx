import React, { useState } from 'react';
import { connect } from 'react-redux';
import { create } from './todo.actions';
import PropTypes from 'prop-types';

const TodoForm = ({ create }) => {
	const [todoInput, setTodoInput] = useState('');

	const onChangeInput = (e) => setTodoInput(e.target.value);
	const isEmptyInput = () => (todoInput ? true : false);
	const clearInput = () => setTodoInput('');

	return (
		<div className='create-task'>
			<input
				className='create-task__input'
				type='text'
				value={todoInput}
				onChange={onChangeInput}
			/>
			<button
				className='btn create-task__btn'
				onClick={
					isEmptyInput()
						? () => [create({ title: todoInput, done: false }), clearInput()]
						: null
				}>
				Create
			</button>
		</div>
	);
};

const mapDispatch = { create };

TodoForm.propTypes = {
	create: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(TodoForm);
