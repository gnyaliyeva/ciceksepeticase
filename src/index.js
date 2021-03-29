import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';
import MainLayout from './Layouts/main';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <MainLayout component={<HomePage />} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
