import React from 'react';

import Person from './Person/Person';

const Persons = (props) =>
	props.persons.map((person, index) => {
		return (
			<Person
				key={person.id}
				click={() => props.clicked(index)}
				name={person.name}
				age={person.age}
				changed={(event) =>
					props.named(event, person.id)
				}
			/>
		);
	});

export default Persons;
