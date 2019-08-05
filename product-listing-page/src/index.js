import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-montserrat';
import App from './App';
import { StoreProvider } from './store/context';

ReactDOM.render(<StoreProvider><App /></StoreProvider>, document.getElementById('root'));
