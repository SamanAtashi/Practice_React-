import React from 'react';
import BackDrop from '../BackDrop/BackDrop';
import Aux from '../../../hoc/aux';
import classes from './Modal.module.css';

const Modal = (props) => {
	return (
		<Aux>
			<BackDrop show={props.show} cancelClick={props.cancelClick} />
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
};

export default Modal;
