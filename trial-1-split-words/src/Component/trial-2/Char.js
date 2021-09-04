import React from 'react';

const Char = (props) => {
	const myStyle = {
		display: 'inline-block',
		padding: '16px',
		textAlign: 'center',
		margin: '16px',
		border: '1px solid red',
	};

	return <div style={myStyle} onClick={props.removeMe}>{props.char}</div>;
};

export default Char;
