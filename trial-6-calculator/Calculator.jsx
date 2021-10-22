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
		this.clearing();
		this.setState({ result: 0 });
	}

	clearing = () => {
		document.querySelectorAll('.input')[0].value = '';
		document.querySelectorAll('.input')[1].value = '';
	};

	additionHandler = () => {
		this.setState({
			result:
				Number(this.state.input_1) + Number(this.state.input_2),
		});
		this.clearing();
	};
	subtractHandler = () => {
		this.setState({
			result:
				Number(this.state.input_1) - Number(this.state.input_2),
		});

		this.clearing();
	};
	multiplyHandler = () => {
		this.setState({
			result:
				Number(this.state.input_1) * Number(this.state.input_2),
		});

		this.clearing();
	};
	divisionHandler = () => {
		this.setState({
			result:
				Number(this.state.input_1) / Number(this.state.input_2),
		});

		this.clearing();
	};

	render() {
		let {
			clearHandler,
			state,
			input_1_Handler,
			input_2_Handler,
			additionHandler,
			subtractHandler,
			multiplyHandler,
			divisionHandler,
		} = this;

		return (
			<div>
				<h1>{state.result}</h1>
				<input
					type="number"
					className="input"
					placeholder="Num 1"
					onChange={(e) => input_1_Handler(e)}
				/>
				<input
					type="number"
					className="input"
					placeholder="Num 2"
					onChange={(e) => input_2_Handler(e)}
				/>
				<button onClick={clearHandler}>Clear</button>
				<div>
					<button onClick={() => additionHandler()}>
						+
					</button>
					<button onClick={() => subtractHandler()}>
						-
					</button>
					<button onClick={() => multiplyHandler()}>
						*
					</button>
					<button onClick={() => divisionHandler()}>
						/
					</button>
				</div>
			</div>
		);
	}
}

export default Calculator;
