import React from 'react';

import classes from './BuildControl.module.css';

const BuildControl = (props) => {
	const { BuildControl, Label, Less, More } = classes;

	return (
		<div className={BuildControl}>
			<div className={Label}>{props.label}</div>
			<button className={Less}>Less</button>
			<button className={More}>More</button>
		</div>
	);
};

export default BuildControl;
