import React from 'react';

import classes from './Burger.module.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
	const transformedIngredient = Object.keys(props.ingredients).map(
		(igKey) => {
			//return array of arrays
			return [...Array(props.ingredients[igKey])].map((_, i) => {
				return (
					<BurgerIngredient key={igKey + i} type={igKey} />
				);
			});
		}
	);

	console.log(transformedIngredient);

	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			{transformedIngredient}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default Burger;
