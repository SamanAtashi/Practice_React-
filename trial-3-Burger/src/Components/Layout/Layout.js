import React from 'react';

import Aux from '../../hoc/aux';

import classes from './Layout.module.css';

const Layout = (props) => (
	<Aux>
		<div className={classes.Layout}>Toolbar,SideDrawer, Backdrop</div>
		<main>{props.children}</main>
	</Aux>
);

export default Layout;
