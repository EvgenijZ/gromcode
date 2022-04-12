import React from 'react';

export default class Dialog extends React.Component {
	render() {
		return (
			<div className='dialog'>
				<div className='dialog__heading'>
					<h4 className='dialog__title'>{this.props.title}</h4>
					<button className='dialog__close-btn' onClick={this.props.onClose}>
						+
					</button>
				</div>
				<div className='dialog__content'>{this.props.children}</div>
			</div>
		);
	}
}
