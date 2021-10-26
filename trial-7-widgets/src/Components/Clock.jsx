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
			<div className="border-2 text-white border-yellow-500 bg-yellow-600 p-5">
				<h2 className="m-3 ml-0 font-bold text-3xl ">Clock</h2>
				<p className="my-1">
					<span className="mr-2">Time:</span>
					{this.state.time.toTimeString()}
				</p>
				<p className="my-1">
					<span className="mr-2">Date:</span>
					{this.state.date.toDateString()}
				</p>
			</div>
		);
	}
}

export default Clock;
