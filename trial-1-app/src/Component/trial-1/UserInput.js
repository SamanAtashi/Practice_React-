import React, { Component } from 'react';

class UserInput extends Component {
	inputStyle = {
		border: '2px solid red',
	};
	render() {
		return (
			<input
				style={this.inputStyle}
				type="text"
				onChange={this.props.change}
				value={this.props.valueRecieved}
			/>
		);
	}
}

export default UserInput;
