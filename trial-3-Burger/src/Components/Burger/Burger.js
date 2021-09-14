import React from 'react';

import classes from './Burger.module.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
	let transformedIngredient = Object.keys(props.ingredients)
		.map((igKey) => {
			//return array of arrays
			return [...Array(props.ingredients[igKey])].map((_, i) => {
				return (
					<BurgerIngredient key={igKey + i} type={igKey} />
				);
			});
		})
		.reduce((arr, ele) => arr.concat(ele), []);

	// console.log(transformedIngredient)

	if (transformedIngredient.length === 0) {
		transformedIngredient = <p>Please add some ingredients !</p>;
	}

	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			{transformedIngredient}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default Burger;
