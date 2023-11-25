import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store.js'
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import { configureStore } from '@reduxjs/toolkit';
// import mainReducer from './redux/reducers/mainReducer.js';

// const reduxStore = configureStore( {
//     reducer: mainReducer,
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} >
        <GoogleOAuthProvider clientId="743189399210-8boo2bhpjm8ho57fc3tp53f0lekda265.apps.googleusercontent.com">
            <App />
        </GoogleOAuthProvider>
    </Provider>
);

reportWebVitals();
