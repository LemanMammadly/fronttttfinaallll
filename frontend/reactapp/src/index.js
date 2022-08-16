import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Contextt from './contexts/Contextt';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Contextt>
    <App />
    </Contextt>
  </React.StrictMode>
);