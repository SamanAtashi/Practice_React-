import React, { Component } from 'react';

class Calculator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			result: 0,
		};
	}

	render() {
		return (
			<div>
				<h1>{this.state.result}</h1>
			</div>
		);
	}
}

export default Calculator;
