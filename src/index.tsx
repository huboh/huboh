import './styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "../src/components/App";


const rootElement = document.getElementById('root')!;
const appRoot = ReactDOM.createRoot(rootElement);

appRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);