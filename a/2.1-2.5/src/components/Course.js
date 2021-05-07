import React from "react"
import Content from "./Content"
import Total from "./Total"

const Course = ({courses}) => {
    return (
        <>
        {courses.map(course => {
            return (
                <div key={course.id}>
                    <h1>{course.name}</h1>
                    <Content parts={course.parts}/>
                    <Total parts={course.parts}/>
                </div>
            )
        })}
        </>
    )
}

export default Course