import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp';
import { CounterApp } from './CounterApp';      

const value = 1;

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldApp />
        <CounterApp value = {value}/>
    </React.StrictMode>
)