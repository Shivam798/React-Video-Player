import React from 'react'
import { Link } from 'react-router-dom'

function CourseList() {
    return (
        <div>
            <Link to='/Reactjs'>
            <h1>React.js</h1>
            </Link>
            <Link to='Nodejs'>
            <h1>Node.js</h1>
            </Link>            
        </div>
    )
}

export default CourseList
