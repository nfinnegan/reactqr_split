import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useSplitTreatments } from '@splitsoftware/splitio-react';
import QRCode from "react-qr-code";
//import qrCodeHome from './components/qrCode';
import { osName, deviceType } from 'react-device-detect';

function App() {

  const QRURL = "https://nfinnegan.github.io/reactqr_split/";
  const featureName = 'show_qrCode';

  const { treatments, isReady } = useSplitTreatments({
    names: [featureName],
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

  const { treatment } = treatments[featureName] || {};

  return (
    <div>
      <br />
      <span style={{ color: 'black' }}><center>Scan me!</center></span>
      <div className="qr-wrapper">
        {treatment === 'on' ?  <QRCode value={QRURL} /> :  <div></div>}   
      </div>
  </div>
  ) 
};
  


export default App;
