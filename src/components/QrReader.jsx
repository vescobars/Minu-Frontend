import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';



const QrCodeReader = () =>{
    const[data,setQrscan] = useState('No result');

    const handleScan = data => {
        if (data) {
            setQrscan(data);
        }
    }

    const handleError = err => {
        console.info(err)
    }

    return (
        <div>
            
            <center>
                <div style={{marginTop:100}}>
                    <span className="h2 my-0 text-black text-decoration-none">
                        QR Menu Scanner
                    </span>
                    <QrReader style={{marginTop:'10'}}>
                        delay={300}
                        onError={handleError}
                        onScan={handleScan}
                        style={{ height: '250', width:'320' }}
                    </QrReader>
                </div>
            </center>
        </div>
    );
};

export default QrCodeReader;