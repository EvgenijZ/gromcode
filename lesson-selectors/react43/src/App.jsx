import React from 'react';
import ShoppingCart from './ShoppingCart.jsx';
import Profile from './Profile.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: 'John',
			lastName: 'Doe',
			cartItems: [
				{ id: '1', name: 'iPhone 11', price: 999 },
				{ id: '2', name: 'iPad Pro', price: 799 },
			],
		};

		this.onChangeForm = this.onChangeForm.bind(this);
	}

	onChangeForm(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	render() {
		return (
			<div className='page'>
				<h1 className='title'>{`Hello, ${this.state.firstName} ${this.state.lastName}`}</h1>
				<main className='content'>
					<ShoppingCart
						firstName={this.state.firstName}
						cartItems={this.state.cartItems}
					/>
					<Profile
						userData={{
							firstName: this.state.firstName,
							lastName: this.state.lastName,
						}}
						changeForm={this.onChangeForm}
					/>
				</main>
			</div>
		);
	}
}

export default App;
