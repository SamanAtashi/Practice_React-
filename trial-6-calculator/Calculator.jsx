import React, { Component } from 'react';

class Calculator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			result: 0,
			input_1: '',
			input_2: '',
		};
		this.clearHandler = this.clearHandler.bind(this);
	}

	input_1_Handler = (e) => {
		this.setState({ input_1: e.target.value });
	};
	input_2_Handler = (e) => {
		this.setState({ input_2: e.target.value });
	};

	clearHandler() {
		console.log(this.state);
	}

	additionHandler() {
		this.setState({
			result:
				Number(this.state.input_1) + Number(this.state.input_2),
		});
	}

	render() {
		return (
			<div>
				<h1>{this.state.result}</h1>
				<input
					type="number"
					placeholder="Num 1"
					onChange={(e) => this.input_1_Handler(e)}
				/>
				<input
					type="number"
					placeholder="Num 2"
					onChange={(e) => this.input_2_Handler(e)}
				/>
				<button onClick={this.clearHandler}>Clear</button>
				<div>
					<button onClick={() => this.additionHandler()}>
						+
					</button>
					<button onClick={() => this.subtractHandler()}>
						-
					</button>
					<button onClick={() => this.multiplyHandler()}>
						*
					</button>
					<button onClick={() => this.divisionHandler()}>
						/
					</button>
				</div>
			</div>
		);
	}
}

export default Calculator;
