import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { FormattedMessage } from "react-intl";



const QrCodeReader = () =>{
    const[data,setQrscan] = useState('No result');

    //En teoria esto deberia sacar el link que escanea el qr y lo 
    //guarda en data para que asi salga la URL para que el usuario 
    //pueda abrir la pagina del restaurante
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
                        <FormattedMessage id="QR Menu Scanner"/>
                    </span>
                    <QrReader style={{
                        margin: '0',
                        position: 'absolute',
                    }}>
                        delay={300}
                        onError={handleError}
                        onScan={handleScan}
                        style={{ width: '50%' }}
                    </QrReader>
                </div>
                <p>{data}</p>
            </center>
        </div>
    );
};

export default QrCodeReader;