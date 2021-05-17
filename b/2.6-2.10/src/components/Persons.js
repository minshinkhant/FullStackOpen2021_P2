import React from 'react'

const Persons = ({ filterpersons }) => {
    return (
        <div>
            <ul>
                {filterpersons.map((person, index) =>
                    <li key={index}>{person.name} {person.number}</li>
                )}
            </ul>
        </div>
    )
}

export default Persons