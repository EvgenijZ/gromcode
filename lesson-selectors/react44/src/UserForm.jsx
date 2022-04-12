import React from 'react';

export default class UserForm extends React.Component {
	render() {
		const { firstName, lastName } = this.props.userData;

		return (
			<form className='user-form'>
				<input
					type='text'
					name='firstName'
					className='user-form__input'
					value={firstName}
					onChange={this.props.changeForm}
				/>
				<input
					type='text'
					name='lastName'
					className='user-form__input'
					value={lastName}
					onChange={this.props.changeForm}
				/>
			</form>
		);
	}
}
