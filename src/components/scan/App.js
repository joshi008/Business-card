import React, { useState } from 'react'
import QrReader from 'react-qr-reader'

function App() {
    const [result, setResult] = useState('');

    const handleScan = data => {
        if (data) {
            setResult(data)
        }
    }

    const handleError = err => {
        console.error(err)
    }



    return (
        <div className="scannerQR">
            <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%' }}
            />
            <a href={result}>{result}</a>
        </div>
    )
}

export default App
