import React from 'react';

export default class TodoForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todoInput: '',
		};
	}

	onChangeInput = (e) => {
		this.setState({ todoInput: e.target.value });
	};

	isEmptyInput = () => (this.state.todoInput ? true : false);

	clearInput = () => this.setState({ todoInput: '' });

	render() {
		return (
			<div className='create-task'>
				<input
					className='create-task__input'
					type='text'
					value={this.state.todoInput}
					onChange={this.onChangeInput}
				/>
				<button
					className='btn create-task__btn'
					onClick={
						this.isEmptyInput()
							? () => [
									this.props.onCreate(this.state.todoInput),
									this.clearInput(),
							  ]
							: null
					}>
					Create
				</button>
			</div>
		);
	}
}
