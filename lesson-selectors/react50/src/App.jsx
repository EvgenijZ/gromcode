import React from 'react';
import TodoTitle from './Todo/TodoTitle.jsx';
import TodoForm from './Todo/TodoForm.jsx';
import TodoList from './Todo/TodoList.jsx';
import TodoItem from './Todo/TodoItem.jsx';
import {
	getTodos,
	createTodo,
	updateTodo,
	deleteTodo,
} from './Todo/todoGateway.js';
import './Todo/todo.scss';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
		};
	}

	componentDidMount() {
		getTodos()
			.then((todosData) => this.sortedTodos(todosData))
			.then((todos) => this.setState({ todos }))
			.catch((e) => alert(e));
	}

	sortedTodos = (todos) => todos.sort((a, b) => a.done - b.done);

	onCreate = (title) => {
		const todoData = { title, done: false };
		createTodo(todoData)
			.then((todo) => this.sortedTodos([todo, ...this.state.todos]))
			.then((todos) => this.setState({ todos }))
			.catch((e) => alert(e));
	};

	onToggle = (id) => {
		const todo = this.state.todos.find((todo) => todo.id === id);
		todo.done = !todo.done;
		updateTodo(id, todo)
			.then((_) => this.setState({ todos: this.sortedTodos(this.state.todos) }))
			.catch((e) => alert(e));
	};

	onDelete = (todoId) => {
		deleteTodo(todoId)
			.then(({ id }) => this.state.todos.filter((todo) => todo.id !== id))
			.then((todos) => this.setState({ todos }))
			.catch((e) => alert(e));
	};

	render() {
		return (
			<>
				<TodoTitle title='Todo list' />
				<main className='todo-list'>
					<TodoForm onCreate={this.onCreate} />
					<TodoList>
						{this.state.todos.map((todo) => (
							<TodoItem
								key={todo.id}
								{...todo}
								onToggle={this.onToggle}
								onDelete={this.onDelete}
							/>
						))}
					</TodoList>
				</main>
			</>
		);
	}
}
