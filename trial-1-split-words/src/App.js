import React, { Component } from 'react';
import './App.css';

// ? --------- Trial - 1
// import UserInput from './Component/trial-1/UserInput';
// import UserOutput from './Component/trial-1/UserOutput';
// class App extends Component {
// 	state = {
// 		username: '',
// 	};

// 	stateHandler = (event) => {
// 		this.setState({
// 			username: event.target.value,
// 		});
// 	};

// 	render() {
// 		return (
// 			<div className="App">
// 				<h1>hi</h1>
// 				<UserInput
// 					change={this.stateHandler}
// 					valueRecieved={this.state.username}
// 				/>
// 				<UserOutput username={this.state.username} />
// 				<UserOutput username={this.state.username} />
// 				<UserOutput username={this.state.username} />
// 			</div>
// 		);
// 	}
// }

// ? --------- Trial - 2
import Validation from './Component/trial-2/Validation';
import Char from './Component/trial-2/Char';
class App extends Component {
	state = {
		userInput: '',
	};

	pLength = (e) => {
		this.setState({ userInput: e.target.value });
	};

removeMe=(idx)=>{
    const beforeRemove = [...this.state.userInput]
    beforeRemove.splice(idx,1);
    this.setState({userInput: beforeRemove.join("")})
}

	render() {
		const center = {
			display: 'flex',
			flexWrap: 'wrap',
			padding: '16px',
			textAlign: 'center',
			margin: '16px',
			border: '1px solid red',
		};
		const charList = this.state.userInput
			.split('')
			.map((char, idx) => {
				return (
					<Char
						char={char}
						key={idx}
						removeMe={()=>this.removeMe(idx)}
					/>
				);
			});

		return (
			<div className="App">
				<h1>hi</h1>
				<input
					type="text"
					onChange={(e) => {
						this.pLength(e);
					}}
					value={this.state.userInput}
				/>
				<p>Length is : {this.state.userInput}</p>
				<Validation
					textLen={this.state.userInput.length}
				/>
				<div style={center}>{charList}</div>
			</div>
		);
	}
}
export default App;
