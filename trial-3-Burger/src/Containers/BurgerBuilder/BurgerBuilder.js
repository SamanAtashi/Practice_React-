import React, { Component } from 'react';

import Aux from '../../hoc/aux';

import Burger from '../../Components/Burger/Burger';

class BurgerBuilder extends Component {
	state = {
		cheese: 0,
		salad: 0,
		meat: 0,
	};

	render() {
		return (
			<Aux>
				<Burger ingredients={this.state} />
				<div>Burger Controls</div>
			</Aux>
		);
	}
}

export default BurgerBuilder;
