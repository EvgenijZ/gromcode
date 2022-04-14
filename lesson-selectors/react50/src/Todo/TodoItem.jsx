import React from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends React.Component {
	shouldComponentUpdate(nextProps) {
		return nextProps.done !== this.props.done;
	}

	render() {
		const { id, title, done, onToggle, onDelete } = this.props;
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
					onClick={() => onDelete(id)}></button>
			</li>
		);
	}
}

TodoItem.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	done: PropTypes.bool,
	onToggle: PropTypes.func,
	onDelete: PropTypes.func,
};
