import React, { Component } from 'react';

import './App.css';
import UserInput from './Component/UserInput';
import UserOutput from './Component/UserOutput';

class App extends Component {
	state = {
		username: '',
	};

	stateHandler = (event) => {
		this.setState({
			username: event.target.value,
		});
	};

	render() {
		return (
			<div className="App">
				<h1>hi</h1>
				<UserInput
					change={this.stateHandler}
					valueRecieved={this.state.username}
				/>
				<UserOutput username={this.state.username} />
				<UserOutput username={this.state.username} />
				<UserOutput username={this.state.username} />
			</div>
		);
	}
}

export default App;
