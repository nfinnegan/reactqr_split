import QRCode from "react-qr-code";
import React from "react";
import { useSplitTreatments } from "@splitsoftware/splitio-react";


//Change QRURL to the URL where you'll be hosting this app
const QRURL = "https://ttotenberg-ld.github.io/react_qr_app/";

const qrCodeHome = () => {

    return (
    <div>
      <br />
      <span style={{ color: 'black' }}><center>Scan me!</center></span>
      <div className="qr-wrapper">
        <QRCode value={QRURL} />
      </div>
    </div>
  ) 
};

export default(qrCodeHome);