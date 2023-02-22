import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp';
import { CounterApp } from './CounterApp';
import { FstCompApp } from './FstCompApp';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldApp />
        {/* <CounterApp value = {0}/> */}
        <FstCompApp />
    </React.StrictMode>
)
