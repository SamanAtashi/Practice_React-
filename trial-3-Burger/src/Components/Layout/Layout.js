import React from 'react';

import Aux from '../../hoc/aux';

import ToolBar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.css';

const Layout = (props) => (
	<Aux>
		<ToolBar />
		<SideDrawer />
		<main className={classes.Layout}>{props.children}</main>
	</Aux>
);

export default Layout;
