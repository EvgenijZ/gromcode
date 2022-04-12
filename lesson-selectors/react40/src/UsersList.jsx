import React from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

export default class UsersList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			input: '',
			users: [],
		};

		this.handleFilterChange = this.handleFilterChange.bind(this);
		this.sortUsers = this.sortUsers.bind(this);
	}

	handleFilterChange(e) {
		const { value } = e.target;
		this.setState({ input: value }, this.sortUsers);
	}

	sortUsers() {
		const users = [...this.props.users].filter((user) =>
			user.name.toLowerCase().includes(this.state.input.toLowerCase())
		);

		this.setState({ users });
	}

	componentDidMount() {
		this.setState({ users: this.props.users });
	}

	render() {
		return (
			<div>
				<Filter
					filterText={this.state.input}
					count={this.state.users.length}
					onChange={this.handleFilterChange}
				/>
				<ul className='users'>
					{this.state.users.map(({ id, name, age }) => (
						<User key={id} name={name} age={age} />
					))}
				</ul>
			</div>
		);
	}
}
