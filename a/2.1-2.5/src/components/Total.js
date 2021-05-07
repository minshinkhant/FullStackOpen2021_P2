import React from 'react'

const Total = ({parts}) => {
    const exercisesArray = parts.map(part => part.exercises)
    return (
        <div>total of {exercisesArray.reduce((s,p)=> s+p)} exercises</div>
    )
}

export default Total