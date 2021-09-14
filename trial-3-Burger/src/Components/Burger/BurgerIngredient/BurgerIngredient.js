import React from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.module.css';

class BurgerIngredient extends React.Component {
	render() {
		const { props } = this;
		const {
			BreadBottom,
			BreadTop,
			Seeds1,
			Seeds2,
			Meat,
			Salad,
			Cheese,
			Bacon,
		} = classes;

		let ingredient = null;

		switch (props.type) {
			case 'bread-bottom':
				ingredient = <div className={BreadBottom}></div>;
				break;
			case 'bread-top':
				ingredient = (
					<div className={BreadTop}>
						<div className={Seeds1}></div>
						<div className={Seeds2}></div>
					</div>
				);
				break;

			case 'meat':
				ingredient = <div className={Meat}></div>;
				break;
			case 'salad':
				ingredient = <div className={Salad}></div>;
				break;
			case 'cheese':
				ingredient = <div className={Cheese}></div>;
				break;
			case 'bacon':
				ingredient = <div className={Bacon}></div>;
				break;

			default:
				ingredient = null;
				break;
		}

		return ingredient;
	}
}

BurgerIngredient.propTypes = {
	type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
