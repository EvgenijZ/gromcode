import React from 'react';
import UserForm from './UserForm.jsx';

export default class Profile extends React.Component {
	render() {
		return (
			<div className='column'>
				<UserForm
					userData={this.props.userData}
					changeForm={this.props.changeForm}
				/>
			</div>
		);
	}
}
