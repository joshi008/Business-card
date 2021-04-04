import React, { useState } from 'react'
import QrReader from 'react-qr-scanner'

function App() {
    const [result, setResult] = useState('');

    const handleScan = (data) => {
        setResult(data)
    }

    const handleError = (err) => {
        console.error(err)
    }

    return (
        <div>
            <QrReader
                delay={500}
                style={previewStyle}
                onError={handleError}
                onScan={handleScan}
            />
            <p>{result}</p>
        </div>
    )
}

export default App
