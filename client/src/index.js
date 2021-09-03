import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'regenerator-runtime/runtime';

import './index.css'

const app = new App()
app.init()

ReactDOM.render(
    <React.StrictMode>
        <app.Component />
    </React.StrictMode>,
    document.getElementById('root')
);