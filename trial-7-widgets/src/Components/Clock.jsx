import React, { Component } from 'react';

class Clock extends Component {
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
				<h2>Clock</h2>
				<p>
					<span>Time:</span>
					{this.state.time.toTimeString()}
				</p>
				<p>
					<span>Date:</span>
					{this.state.date.toDateString()}
				</p>
			</div>
		);
	}
}

export default Clock;
