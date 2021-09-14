import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Aux from '../../../hoc/aux';
import classes from './SideDrawer.Module.css';

const SideDrawer = (props) => {
	let attachingClasses = [classes.SideDrawer, classes.Close];

	if (props.open) {
		attachingClasses = [classes.SideDrawer, classes.Open];
	}

	return (
		<Aux>
			<BackDrop show={props.open} cancelClick={props.closed} />
			<div className={attachingClasses.join(' ')}>
				<div className={classes.Logo}>
					<Logo />
				</div>

				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Aux>
	);
};

export default SideDrawer;
