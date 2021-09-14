import React from 'react';
import classes from './BackDrop.Module.css';

const BackDrop = (props) => {
	return props.show ? (
		<div className={classes.BackDrop} onClick={props.cancelClick}></div>
	) : null;
};

export default BackDrop;
