import React, { useState } from 'react';
import User from './User';

const Person = () => {
	const [persons, personsHandler] = useState([
		{ id: 1, name: 'Sam', age: 29 },
		{ id: 2, name: 'Max', age: 25 },
		{ id: 3, name: 'Liam', age: 12 },
	]);

	const toggleHandler = () => {
		if (persons.length > 0) {
			personsHandler([]);
		} else {
			personsHandler([
				{ id: 1, name: 'Sam', age: 29 },
				{ id: 2, name: 'Max', age: 25 },
				{ id: 3, name: 'Liam', age: 12 },
			]);
		}
	};

	return (
		<>
			<h1>
				This is <i>Person Project</i>
			</h1>
			<p>This is really working!!!</p>
			<User
				persons={persons}
				personsHandler={personsHandler}
				toggleHandler={toggleHandler}
			/>
		</>
	);
};

export default Person;
