import React from 'react';
import Spinner from './Spinner.jsx';

export const withDataLoader = (url) => {
	return function (Component) {
		return class extends React.Component {
			constructor(props) {
				super(props);

				this.state = {
					data: null,
				};
			}

			componentDidMount() {
				this.get();
			}

			get = () => {
				fetch(url)
					.then((response) => response.json())
					.then((data) => this.setState({ data }));
			};

			render() {
				return !this.state.data ? (
					<Spinner />
				) : (
					<Component data={this.state.data} />
				);
			}
		};
	};
};
