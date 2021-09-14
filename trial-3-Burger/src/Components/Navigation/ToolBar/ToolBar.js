import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './ToolBar.Module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const ToolBar = (prop) => {
	return (
		<header className={classes.ToolBar}>
			<div>Menu</div>
			<Logo />
			<nav>
				<NavigationItems />
			</nav>
		</header>
	);
};
export default ToolBar;
