import React from 'react'
import { Link } from 'react-router-dom'

function Component() {
    return (
        <div>
            <Link to="/"><span> Home </span></Link> 
            <Link to="/form"><span> Form </span></Link> 
            <Link to="/stronka"><span> Stronka </span></Link> 
        </div>
    )
}

export default Component
