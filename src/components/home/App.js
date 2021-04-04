import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

function App() {
    return (
        <div className="container">
            <h1>Digital Business Card Generator</h1>
            <br />
            <br />
            <a href="/scan">
                <button className="btn btn-lg" >💻Scan my card💻</button>
            </a>
            <br />
            <br />
            <br />
            <a href="/generate">
                <button className="btn btn-lg" >✨Generate new card✨</button>
            </a>
        </div>
    )
}

export default App
