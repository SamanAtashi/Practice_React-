import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './ToolBar.Module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const ToolBar = (prop) => {
	return (
		<header className={classes.ToolBar}>
			<div>Menu</div>

			<div className={classes.Logo}>
				<Logo />
			</div>

			<nav className={classes.DesktopOnly}>
				<NavigationItems />
			</nav>
		</header>
	);
};
export default ToolBar;
