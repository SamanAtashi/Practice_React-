import React from 'react';

import classes from './Logo.Module.css';

import burgerLogo from '../../Assets/images/burger-logo.png';

const Logo = (props) => {
	return (
		<div className={classes.Logo}>
			<img src={burgerLogo} alt="MyBurger" />
		</div>
	);
};

export default Logo;
