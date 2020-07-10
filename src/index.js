import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Card from './componentes/Card/Card';
import CardManager from './componentes/CardManager/CardManager';

ReactDOM.render(
  <React.StrictMode>
    <App id="Primera búsqueda" color="pink">
    <CardManager />
    </App>
    <App id="Segunda búsqueda" color="blue">
    <CardManager />
    </App>
    <App id="Tercera búsqueda" color ="yellow">
    <CardManager />
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
