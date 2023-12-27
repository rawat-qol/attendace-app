import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from './components/Routing';

import './index.css';
import './styles/main.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Routing />
  </React.Fragment>
);

