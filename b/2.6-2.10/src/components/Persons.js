import React from 'react'

const Persons = ({ filterPersons }) => {
    return (
        <div>
            <ul>
                {filterPersons.map((person, index) =>
                    <li key={index}>{person.name} {person.number}</li>
                )}
            </ul>
        </div>
    )
}

export default Persons