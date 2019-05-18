import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import SpecificPage from './components/SpecificPage/SpecificPage';

ReactDOM.render(
    // <Router>
    //     <App />
    // </Router>,

    <SpecificPage />,
    document.getElementById('root')
);
