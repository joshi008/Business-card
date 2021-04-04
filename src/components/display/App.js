import html2canvas from 'html2canvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react'
import './style.css'

var QRCode = require('qrcode.react');


function App() {
    const [value, setValue] = useState('')
    const [url, setUrl] = useState('www.google.com')



    const handleSubmit = (e) => {
        e.preventDefault();
        setUrl(value)
        setValue('')
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    useEffect(() => {
        document.getElementById("download").addEventListener("click", function () {

            html2canvas(document.querySelector('#capture')).then(function (canvas) {

                saveAs(canvas.toDataURL(), 'qr-code-card.png');
            });
        });

        function saveAs(uri, filename) {

            var link = document.createElement('a');

            if (typeof link.download === 'string') {

                link.href = uri;
                link.download = filename;

                //Firefox requires the link to be in the body
                document.body.appendChild(link);

                //simulate click
                link.click();

                //remove the link when done
                document.body.removeChild(link);

            } else {

                window.open(uri);

            }
        }

    })

    return (
        <div className="container oop">
            <br />
            <br />

            <br />

            <form onSubmit={handleSubmit}>
                <div class="mb-3 out" >
                    <h3 className="label">Business Link:</h3>
                    <input type="text" className="form-control pop" id="floatingInput" value={value} onChange={handleChange} placeholder="https://www.google.com" />
                </div>
                <br />
                <input type="submit" value="Submit" className="btn btn-lg" />
            </form>

            <br />
            <hr />
            <br />
            <div className="qr" id="capture">
                <QRCode value={url} />
            </div>
            <br />
            <br />

            <button className="btn btn-lg" id="download" >🎉Download🎉</button>

        </div>
    )
}

export default App
