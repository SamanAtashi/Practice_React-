import React from 'react';

import Aux from '../../hoc/aux';

import classes from './Person.css';

class person extends React.Component {
	render() {
		const { props } = this;

		return [
			<p onClick={props.click}>
				I'm {props.name} and I am {props.age} years old!
			</p>,
			<p>{props.children}</p>,
			<input
				type="text"
				onChange={props.changed}
				value={props.name}
			/>,
		];

		// we temporarily turned styling off

		/* <React.Fragment>
				<p onClick={props.click}>
					I'm {props.name} and I am {props.age} years old!
				</p>
				<p>{props.children}</p>
				<input
					type="text"
					onChange={props.changed}
					value={props.name}
				/>
			</React.Fragment> */

		/* <Aux>
				<p onClick={props.click}>
					I'm {props.name} and I am {props.age} years old!
				</p>
				<p>{props.children}</p>
				<input
					type="text"
					onChange={props.changed}
					value={props.name}
				/>
			</Aux> */
	}
}

export default person;
