import React, { Component } from 'react';

import Aux from '../../hoc/aux';

import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICE = {
	cheese: 0.5,
	salad: 0.4,
	meat: 1.3,
	bacon: 0.7,
};

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			cheese: 0,
			salad: 0,
			meat: 0,
			bacon: 0,
		},
		totalPrice: 4,
	};

	addIngredientHandler = (type) => {
		// handling ingredients
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngerdients = {...this.state.ingredients};
		updatedIngerdients[type] = updatedCount;

		// handling price
		const additionPrice = INGREDIENTS_PRICE[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + additionPrice;

		this.setState({
			ingredients: updatedIngerdients,
			totalPrice: newPrice,
		});
	};

	// removeIngredientHandler = (type) => {
	// 	this.setState({});
	// };

	render() {
		return (
			<Aux>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					addIngredient={this.addIngredientHandler}
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder;
