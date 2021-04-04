import React, { useState } from 'react'
var QRCode = require('qrcode.react');

function App() {
    const [value, setValue] = useState('')
    const [url, setUrl] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setUrl(value)
        setValue('')
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Business:
          <input type="text" value={value} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <QRCode value={url} />
        </div>
    )
}

export default App
