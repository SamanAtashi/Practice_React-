import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './ToolBar.Module.css';

const ToolBar = (prop) => {
	return (
		<header className={classes.ToolBar}>
			<div>Menu</div>
			<Logo />
			<nav>...</nav>
		</header>
	);
};
export default ToolBar;
