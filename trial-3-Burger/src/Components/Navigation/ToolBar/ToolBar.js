import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './ToolBar.Module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggler from '../SideDrawer/DrawerToggler/DrawerToggler';

const ToolBar = (props) => {
	return (
		<header className={classes.ToolBar}>
			<DrawerToggler toggleClicked={props.SideDrawerToggle} />
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
