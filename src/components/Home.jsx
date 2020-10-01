import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
    return(
        <div>
            <h1>Flashcard Simulator</h1>
            
            <Link role="button" to="/create">Create</Link>
            <Link role="button" to="/edit">Edit</Link>
            <Link role="button" to="/study">Study</Link>
            
      </div>
    )
}

