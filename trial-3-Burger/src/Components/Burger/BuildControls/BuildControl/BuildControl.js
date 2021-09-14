import React from 'react';

import classes from './BuildControl.module.css';

const BuildControl = (props) => {
	const { BuildControl, Label, Less, More } = classes;

	return (
		<div className={BuildControl}>
			<div className={Label}>{props.label}</div>
			<button
				className={Less}
				onClick={props.removed}
				disabled={props.disabled}
			>
				Less
			</button>
			<button className={More} onClick={props.added}>
				More
			</button>
		</div>
	);
};

export default BuildControl;
