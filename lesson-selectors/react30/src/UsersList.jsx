import React from 'react';
import User from './User.jsx';
import Pagination from './Pagination.jsx';

class UsersList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentPage: 0,
			itemsPerPage: 3,
		};
	}

	goPrev = () => {
		this.setState({
			currentPage: this.state.currentPage - 1,
		});
	};

	goNext = () => {
		this.setState({
			currentPage: this.state.currentPage + 1,
		});
	};

	render() {
		const { currentPage, itemsPerPage } = this.state;
		let startIndex = currentPage * itemsPerPage;
		const showedUsers = this.props.users
			.slice(startIndex, itemsPerPage + startIndex)
			.map(({ id, ...user }) => <User key={id} {...user} />);
		return (
			<div>
				<Pagination
					totalItems={this.props.users.length}
					itemsPerPage={itemsPerPage}
					currentPage={currentPage + 1}
					goPrev={this.goPrev}
					goNext={this.goNext}
				/>
				<ul className='users'>{showedUsers}</ul>
			</div>
		);
	}
}

export default UsersList;
