// libraries
import React from 'react';
import ReactDOM from 'react-dom';

// js
import App from './App';

// methods
function renderElement() {
    return (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}

// render
ReactDOM.render(renderElement(), document.getElementById('root'));
