import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect, use} from 'react';
import { useSplitTreatments } from '@splitsoftware/splitio-react';
import QRCode from "react-qr-code";
//import qrCodeHome from './components/qrCode';
import { osName, deviceType } from 'react-device-detect';

function App() {
  
  //Change QRURL to the URL where you'll be hosting this app
  const QRURL = "https://nfinnegan.github.io/reactqr_split/";
  const showQR = 'show_qrCode';
  const configBackground = 'configureBackground';

  const { treatments, isReady } = useSplitTreatments({
    names: [showQR, configBackground],
    attributes:{
      device: deviceType,
      operatingSystem: osName
    }
  });

  console.log("SDK Ready", isReady)
  console.log("treatments", treatments)

  if (!isReady) {
    return <div>Loading...</div>;    
  }

  //access each treatmnet individually
  const showQRTreatment = treatments[showQR]?.treatment
  const configBackgroundTreatment = treatments[configBackground]?.treatment

  console.log("showQRTreatment", showQRTreatment);
  console.log("configBackgroundTreatment", configBackgroundTreatment);

  return (
  <div className={`${configBackgroundTreatment}`}>
      <br />
      <span className="container-qr" style={{ color: 'black' }}>
        <h3>Scan me!</h3>
          <div className="qr-wrapper">
            {showQRTreatment === 'on' ?  <QRCode value={QRURL} /> :  <div></div>}   
          </div>
      </span>
  </div>
  ) 
};
  


export default App;
