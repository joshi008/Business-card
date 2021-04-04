import React from 'react'
var QRCode = require('qrcode.react');

function App() {
    return (
        <div>
            <QRCode value="http://facebook.github.io/react/" />
        </div>
    )
}

export default App
