import React from 'react';

import Aux from '../../hoc/aux';

import ToolBar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.css';

class Layout extends React.Component {
	state = { showSideDrawer: true };

	SideDrawerCloseHandler = () => {
		this.setState({ showSideDrawer: false });
	};

	SideDrawerToggleHandler = () => {
		this.setState((preState) => {
			return { showSideDrawer: !preState.showSideDrawer };
		});
	};

	render() {
		return (
			<Aux>
				<ToolBar
					SideDrawerToggle={this.SideDrawerToggleHandler}
				/>
				<SideDrawer
					closed={this.SideDrawerCloseHandler}
					open={this.state.showSideDrawer}
				/>
				<main className={classes.Layout}>
					{this.props.children}
				</main>
			</Aux>
		);
	}
}

export default Layout;
