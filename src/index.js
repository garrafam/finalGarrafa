import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyA3p4L7_9V6cgIqAQ2UHpQ455XMRRSCEyY",
  authDomain: "marcos-e-commerce.firebaseapp.com",
  projectId: "marcos-e-commerce",
  storageBucket: "marcos-e-commerce.appspot.com",
  messagingSenderId: "804844671869",
  appId: "1:804844671869:web:dfbe2afc58d3c0cc40f214",
  measurementId: "G-JRQM0MPT9E"
};
// Initialize Firebase
 initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

