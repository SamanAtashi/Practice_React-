import React from 'react';

import Aux from '../../../hoc/Aux/aux';

import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
	const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
		return (
			<li key={igKey}>
				{props.ingredients[igKey]}
				<span> {igKey}</span>
			</li>
		);
	});

	return (
		<Aux>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>{ingredientsSummary}</ul>
			<p>Continue To CheckOut?</p>
			<p>
				<strong>Total Price: {props.price.toFixed(2)}</strong>
			</p>
			<Button btnType="Danger" clicked={props.purchaseCancelled}>
				CANCEL
			</Button>
			<Button btnType="Success" clicked={props.purchaseContinued}>
				CONTINUE
			</Button>
		</Aux>
	);
};

export default OrderSummary;
