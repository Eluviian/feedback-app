import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App'

//ReactDOM.render(<h1>My App</h1>, document.getElementById('root'));
ReactDOM.render(
    <React.StrictMode>
    <App/> 
    </React.StrictMode>,
    document.getElementById('root')
);  //inserting this into root
