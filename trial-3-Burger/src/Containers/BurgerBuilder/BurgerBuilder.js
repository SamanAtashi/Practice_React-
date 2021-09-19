import React, { Component } from 'react';

import Aux from '../../hoc/Aux/aux';
import axios from '../../axios-orders';
import Spinner from '../../Components/UI/Spinner/Spinner';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENTS_PRICE = {
	cheese: 0.5,
	salad: 0.4,
	meat: 1.3,
	bacon: 0.7,
};

class BurgerBuilder extends Component {
	state = {
		ingredients: null,
		totalPrice: 4,
		purchaseable: false,
		purchasing: false,
		loading: false,
		error: false,
	};

	componentDidMount() {
		axios.get(
			'https://my-burger-react-59aa2-default-rtdb.firebaseio.com/ingredients.json'
		)
			.then((res) => {
				this.setState({ ingredients: res.data });
			})
			.catch((err) => {
				this.setState({ error: true });
			});
	}

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

	purchaseContinueHandler = () => {
		this.setState({ loading: true });
		const order = {
			ingredients: this.state.ingredients,
			price: this.state.totalPrice,
			customer: {
				name: 'Saman Atashi',
				address: {
					street: 'TestStreet 1',
					zipCode: 3643,
					country: 'Russia',
				},
				email: 'test@test.com',
			},
			deliveryMethod: 'fastest',
		};

		axios.post('/orders.json', order)
			.then((res) => {
				this.setState({ loading: false, purchasing: false });
				console.log(res);
			})
			.catch((err) => {
				this.setState({ loading: false, purchasing: false });
				console.log(err);
			});
	};

	render() {
		const disabledInfo = {
			...this.state.ingredients,
		};

		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		let orderSummary = null;

		let burger = this.state.error ? (
			<p>Ingredients can not be found!!! </p>
		) : (
			<Spinner />
		);
		if (this.state.ingredients) {
			burger = (
				<Aux>
					<Burger ingredients={this.state.ingredients} />
					<BuildControls
						addIngredient={this.addIngredientHandler}
						removeIngredient={
							this.removeIngredientHandler
						}
						disabled={disabledInfo}
						price={this.state.totalPrice}
						purchaseable={this.state.purchaseable}
						purchasing={this.purchasingHandler}
					/>
				</Aux>
			);
			orderSummary = (
				<OrderSummary
					price={this.state.totalPrice}
					ingredients={this.state.ingredients}
					purchaseCancelled={this.purchaseCanselHandler}
					purchaseContinued={this.purchaseContinueHandler}
				/>
			);
		}

		if (this.state.loading) {
			orderSummary = <Spinner />;
		}

		return (
			<Aux>
				<Modal
					show={this.state.purchasing}
					cancelClick={this.purchaseCanselHandler}
				>
					{orderSummary}
				</Modal>
				{burger}
			</Aux>
		);
	}
}

export default withErrorHandler(BurgerBuilder, axios);
