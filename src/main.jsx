import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="1042953571357-a0cmhb9v9catrqdrj293jroj5qfp0m1p.apps.googleusercontent.com">
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
)
