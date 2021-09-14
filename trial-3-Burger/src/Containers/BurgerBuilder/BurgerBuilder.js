import React, { Component } from 'react';

import Aux from '../../hoc/aux';

import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';

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
		purchaseable: false,
		purchasing: false,
	};

	updatePurchaseState(ingredients) {
		const sum = Object.keys(ingredients)
			.map((igKey) => {
				return ingredients[igKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);
		this.setState({ purchaseable: sum > 0 });
	}

	addIngredientHandler = (type) => {
		// handling ingredients
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngerdients = { ...this.state.ingredients };
		updatedIngerdients[type] = updatedCount;

		// handling price
		const additionPrice = INGREDIENTS_PRICE[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + additionPrice;

		this.setState({
			ingredients: updatedIngerdients,
			totalPrice: newPrice,
		});

		this.updatePurchaseState(updatedIngerdients);
	};

	removeIngredientHandler = (type) => {
		// handling ingredients
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngerdients = { ...this.state.ingredients };
		updatedIngerdients[type] = updatedCount;

		// handling price
		const additionPrice = INGREDIENTS_PRICE[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - additionPrice;

		this.setState({
			ingredients: updatedIngerdients,
			totalPrice: newPrice,
		});

		this.updatePurchaseState(updatedIngerdients);
	};

	purchasingHandler = () => {
		this.setState({ purchasing: true });
	};

	purchaseCanselHandler = () => {
		this.setState({ purchasing: false });
	};

	render() {
		const disabledInfo = {
			...this.state.ingredients,
		};

		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		return (
			<Aux>
				<Modal
					show={this.state.purchasing}
					cancelClick={this.purchaseCanselHandler}
				>
					<OrderSummary
						ingredients={this.state.ingredients}
					/>
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					addIngredient={this.addIngredientHandler}
					removeIngredient={this.removeIngredientHandler}
					disabled={disabledInfo}
					price={this.state.totalPrice}
					purchaseable={this.state.purchaseable}
					purchasing={this.purchasingHandler}
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder;
