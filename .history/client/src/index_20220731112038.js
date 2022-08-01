import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'antd/dist/antd.min.css'
import AuthContextProvider from './contexts/authContext';
import BlogContextProvider from './contexts/blogContext';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  Pro
    <BlogContextProvider>
      <AuthContextProvider>

        <App />
        
      </AuthContextProvider>
    </BlogContextProvider>

  </React.StrictMode>
);

