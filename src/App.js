import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useSplitTreatments } from '@splitsoftware/splitio-react';
import qrCodeHome from './components/qrCode';
import { osName, deviceType } from 'react-device-detect';

function App() {

  const { treatments, isReady } = useSplitTreatments('show_qr_code', {
    device: deviceType,
    operatingSystem: osName
  });

  if (!isReady) {
    return <div>Loading...</div>;    
  }

  return (
    <div>
      <br />
      <span style={{ color: 'black' }}><center>Scan me!</center></span>
      <div className="qr-wrapper">
        {treatments.showQrCode === 'on' ?  <QRCode value={QRURL} /> :  <div></div>}    
      </div>
  </div>
  ) 
};
  


export default App;
