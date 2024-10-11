// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Store from './redux/Store'; 
import AppRoutes from './routes/AppRoutes'; 

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={Store}>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </Provider>
);
