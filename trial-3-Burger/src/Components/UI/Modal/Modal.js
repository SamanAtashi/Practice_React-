import React from 'react';
import BackDrop from '../BackDrop/BackDrop';
import Aux from '../../../hoc/aux';
import classes from './Modal.module.css';

class Modal extends React.Component {
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.show !== this.props.show;
	}

	render() {
		const { props } = this;

		return (
			<Aux>
				<BackDrop
					show={props.show}
					cancelClick={props.cancelClick}
				/>
				<div
					style={{
						transform: props.show
							? 'translateY(0)'
							: 'translateY(-100vh)',
						opacity: props.show ? '1' : '0',
					}}
					className={classes.Modal}
				>
					{props.children}
				</div>
			</Aux>
		);
	}
}

export default Modal;
