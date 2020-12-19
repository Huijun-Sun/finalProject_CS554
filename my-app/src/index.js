import React from 'react';
import ReactDOM from 'react-dom';
// import Router from './components/Router';
// import Router from './dist/Router';
// import Router from './dist_temp/Router';
import Router from './Components/Router';
import * as serviceWorker from './serviceWorker';
import './css/style.css';

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
