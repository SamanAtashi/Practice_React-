import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.module.css';

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Meat', type: 'meat' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
];

const BuildControls = (props) => {
	return (
		<div className={classes.BuildControls}>
			{controls.map((ctrl) => {
				return (
					<BuildControl
						key={ctrl.label}
						label={ctrl.label}
						added={() => props.addIngredient(ctrl.type)}
						removed={() =>
							props.removeIngredient(ctrl.type)
						}
						disabled={props.disabled[ctrl.type]}
					/>
				);
			})}
		</div>
	);
};

export default BuildControls;
