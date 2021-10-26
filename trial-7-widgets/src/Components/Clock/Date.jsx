import React, { Component } from 'react';

class MyDate extends Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
		this.clearing = 0;
	}

	tick = () => {
		this.setState({ date: new Date() });
	};

	componentDidMount() {
		let speId = setInterval(() => {
			this.tick();
		}, 1000);
		this.clearing = speId;
	}

	componentWillUnmount() {
		clearInterval(this.clearing);
	}

	render() {
		return <div>{this.state.date.toString()}</div>;
	}
}

export default MyDate;
