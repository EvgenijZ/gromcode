import React from 'react';

export default class UserForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			student: '',
			occupation: '',
			about: '',
		};

		this.onSubmitForm = this.onSubmitForm.bind(this);
		this.onChangeInput = this.onChangeInput.bind(this);
	}

	onChangeInput(e) {
		const { name, value, checked, type } = e.target;
		const val = type === 'checkbox' ? checked : value;

		this.setState({ [name]: val });
	}

	onSubmitForm(e) {
		e.preventDefault();
		this.props.onSubmit(this.state);
	}

	render() {
		return (
			<form className='login-form' onSubmit={this.onSubmitForm}>
				<h1 className='form-title'>Profile</h1>
				<div className='form-control'>
					<label className='form-label' htmlFor='name'>
						Name
					</label>
					<input
						className='form-input'
						type='text'
						id='name'
						name='name'
						onChange={this.onChangeInput}
						value={this.state.name}
					/>
				</div>
				<div className='form-control'>
					<label className='form-label' htmlFor='student'>
						Student
					</label>
					<input
						className='form-input'
						type='checkbox'
						id='student'
						name='student'
						onChange={this.onChangeInput}
						value={this.state.student}
					/>
				</div>
				<div className='form-control'>
					<label className='form-label' id='occupation' htmlFor='occupation'>
						Occupation
					</label>
					<select
						name='occupation'
						className='form-input'
						onChange={this.onChangeInput}
						value={this.state.occupation}>
						<option value='london'>London</option>
						<option value='new-york'>New York</option>
						<option value='coconut'>Sidney</option>
						<option value='mango'>Berlin</option>
					</select>
				</div>
				<div className='form-control'>
					<label className='form-label' id='about' htmlFor='about'>
						About
					</label>
					<textarea
						name='about'
						className='form-input'
						onChange={this.onChangeInput}
						value={this.state.about}></textarea>
				</div>
				<button className='submit-button' type='submit'>
					Submit
				</button>
			</form>
		);
	}
}
