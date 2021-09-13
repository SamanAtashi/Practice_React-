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
			<p>
				Current Price: <strong>{props.price.toFixed(2)}</strong>
			</p>
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
			<button
				disabled={!props.purchaseable}
				className={classes.OrderButton}
			>
				CHECK OUT
			</button>
		</div>
	);
};

export default BuildControls;
