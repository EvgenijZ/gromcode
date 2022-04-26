import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as todosActions from './todo.actions';
import { getTodosSelector } from './todo.selectors';
import PropTypes from 'prop-types';
import TodoTitle from './TodoTitle.jsx';
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';
import TodoItem from './TodoItem.jsx';
import './todo.scss';

const Todo = ({ getTodos, todos }) => {
	useEffect(() => {
		getTodos();
	}, [getTodos]);

	return (
		<>
			<TodoTitle title='Todo list' />
			<main className='todo-list'>
				<TodoForm />
				<TodoList>
					{todos.map((todo) => (
						<TodoItem key={todo.id} todo={todo} />
					))}
				</TodoList>
			</main>
		</>
	);
};

const mapState = (state) => {
	return {
		todos: getTodosSelector(state),
	};
};

const mapDispatch = {
	getTodos: todosActions.fetchTodo,
};

Todo.propTypes = {
	todos: PropTypes.array.isRequired,
	getTodos: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(Todo);
