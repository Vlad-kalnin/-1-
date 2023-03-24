import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import Users from "./components/user";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
      <Users/>
  /* </React.StrictMode> */
);


reportWebVitals();