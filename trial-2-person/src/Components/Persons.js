import React from 'react';

import Person from './Person/Person';

class Persons extends React.Component {
    render() {
        const {
            props,
        } = this;

        return props.persons.map((person, index) => {
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
    }
}

export default Persons;
