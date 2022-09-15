import React from 'react';
import ReactDOM from 'react-dom/client';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { ModeProvider } from './contexts/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <BrowserRouter>
        <ModeProvider>
          <App />
        </ModeProvider>
      </BrowserRouter>
    </LocalizationProvider>
  </React.StrictMode>
);

