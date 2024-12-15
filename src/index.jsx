import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Ensure this file exists or adjust the import
import App from './App.jsx'; // Change the import to match the file extension

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);