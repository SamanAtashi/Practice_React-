import React from 'react';

import Aux from '../../../hoc/aux';

const OrderSummary = (props) => {
	const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
		return (
			<li>
				<span>{igKey}</span>
				{props.ingredients[igKey]}
			</li>
		);
	});

	return (
		<Aux>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>{ingredientsSummary}</ul>
			<p>Continue To CheckOut?</p>
            <button>CANCEL</button>
            <button>CONTINUE</button>
		</Aux>
	);
};

export default OrderSummary;