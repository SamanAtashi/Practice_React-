import React from 'react';

const User = ({ persons, nameHandler, toggleHandler }) => {
	return (
		<div className="user">
			<button className="toggle" onClick={toggleHandler}>
				Toggle Me
			</button>
			{persons.map((person) => {
				return (
					<div key={person.id} className="eachPerson">
						<p>{`I'm "${person.name}" and I am ${person.age} years old!`}</p>
						<input
							value={person.name}
							type="text"
							onChange={(e) =>
								nameHandler(person.id, e)
							}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default User;
