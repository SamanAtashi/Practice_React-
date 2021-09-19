import React, { Component } from 'react';

import Modal from '../../Components/UI/Modal/Modal';
import Aux from '../Aux/aux';

const withErrorHandler = (WrappedComponent, axios) => {
	return class extends Component {
		state = {
			error: null,
		};

		componentWillMount() {
			this.reqInterceptors = axios.interceptors.request.use(
				(req) => {
					this.setState({ error: null });
					return req;
				}
			);
			this.resInterceptors = axios.interceptors.response.use(
				(res) => res,
				(err) => {
					this.setState({ error: err });
				}
			);
		}

		componentWillUnmount() {
			axios.interceptors.request.eject(this.reqInterceptors);
			axios.interceptors.response.eject(this.resInterceptors);
		}

		errorConfirmedHandler = () => {
			this.setState({ error: null });
		};

		render() {
			return (
				<Aux>
					<Modal
						show={this.state.error}
						cancelClick={this.errorConfirmedHandler}
					>
						{this.state.error
							? this.state.error.message
							: null}
					</Modal>
					<WrappedComponent {...this.props} />
				</Aux>
			);
		}
	};
};

export default withErrorHandler;
