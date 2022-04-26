import React from 'react';
import { connect } from 'react-redux';
import { remove, update } from './todo.actions';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
	const { id, title, done } = todo;

	const onToggle = (id) => {
		const updatedTodo = todo;
		updatedTodo.done = !updatedTodo.done;
		updateTodo(id, todo);
	};

	const todoClass = done ? 'list-item list-item_done' : 'list-item';

	return (
		<li className={todoClass}>
			<input
				type='checkbox'
				className='list-item__checkbox'
				onChange={() => onToggle(id)}
				checked={done}
			/>
			{title}
			<button
				className='list-item__delete-btn'
				onClick={() => removeTodo(id)}></button>
		</li>
	);
};

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	removeTodo: PropTypes.func.isRequired,
	updateTodo: PropTypes.func.isRequired,
};

const mapDispatch = {
	removeTodo: remove,
	updateTodo: update,
};

export default connect(null, mapDispatch)(TodoItem);
