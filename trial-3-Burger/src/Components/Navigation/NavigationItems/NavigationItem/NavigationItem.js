import React from 'react';

import classes from './NavigationItem.Module.css';

const NavigationItems = (props) => {
	return (
		<li className={classes.NavigationItem}>
			<a
				href={props.link}
				className={props.active ? classes.active : null}
			>
				{props.children}
			</a>
		</li>
	);
};
export default NavigationItems;
