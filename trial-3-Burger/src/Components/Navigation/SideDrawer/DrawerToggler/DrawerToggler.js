import React from 'react';

import classes from './DrawerToggler.Module.css';

const DrawerToggler = (props) => {
	return (
		<div className={classes.DrawerToggle} onClick={props.toggleClicked}>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default DrawerToggler;
