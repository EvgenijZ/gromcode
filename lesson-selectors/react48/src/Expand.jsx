import React from 'react';

export default class Expand extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
		};
	}

	toggleOpen() {
		this.setState({ isOpen: !this.state.isOpen });
	}

	render() {
		const btnStyles = this.state.isOpen
			? 'fas fa-chevron-up'
			: 'fas fa-chevron-down';

		return (
			<div className='expand border'>
				<div className='expand__header'>
					<span className='expand__title'>{this.props.title}</span>
					<button
						className='expand__toggle-btn'
						onClick={() => this.toggleOpen()}>
						<i className={btnStyles}></i>
					</button>
				</div>
				{this.state.isOpen && (
					<div className='expand__content'>
						{this.props.children}
						<p>
							Hooks are a new addition in React 16.8. They let you use state and
							other React features without writing a class.
						</p>
					</div>
				)}
			</div>
		);
	}
}
