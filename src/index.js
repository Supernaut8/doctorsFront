import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store.js'
import reportWebVitals from './reportWebVitals';
// import { configureStore } from '@reduxjs/toolkit';
// import mainReducer from './redux/reducers/mainReducer.js';

// const reduxStore = configureStore( {
//     reducer: mainReducer,
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} >
        <App />
    </Provider>
);

reportWebVitals();
