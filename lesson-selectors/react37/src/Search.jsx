import React from 'react';

export default class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '',
		};

		this.onChangeInput = this.onChangeInput.bind(this);
		this.onSearch = this.onSearch.bind(this);
	}

	onChangeInput(e) {
		this.setState({ value: e.target.value });
	}

	onSearch(e) {
		e.preventDefault();
		alert(`Search text: ${this.state.value}`);
	}

	render() {
		return (
			<form className='search' onSubmit={this.onSearch}>
				<input
					type='text'
					className='search__input'
					onChange={this.onChangeInput}
					value={this.state.value}
				/>
				<button className='search__button'>Search</button>
			</form>
		);
	}
}
