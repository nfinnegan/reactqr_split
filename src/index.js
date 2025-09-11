import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SplitFactoryProvider } from '@splitsoftware/splitio-react';

const sdkConfig = {
  core: {
    authorizationKey: "1lp5a0rjsn1lidv5rvpcfhv0dineok7cbjhm",
    key: "natalie_test12"

  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <SplitFactoryProvider config={sdkConfig}> 
    <App />
  </SplitFactoryProvider>   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
