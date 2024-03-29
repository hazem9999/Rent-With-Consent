import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <header style = {headerStyle}>
            <h1>Requests List</h1>
            <Link style={linkStyle} to="/">Home</Link> |
             <Link style = {linkStyle} to="/TheMap"> Map</Link>
        </header>
    )
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

const headerStyle= {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
