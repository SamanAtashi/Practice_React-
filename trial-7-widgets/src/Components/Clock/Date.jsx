import React, { Component } from 'react';

class MyDate extends Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date(), time: new Date() };
		this.clearing = 0;
	}

	tick = () => {
		this.setState({ date: new Date(), time: new Date() });
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
		return (
			<div>
				<span>{this.state.time.toTimeString()}</span>
				<span>{this.state.date.toDateString()}</span>
			</div>
		);
	}
}

export default MyDate;
