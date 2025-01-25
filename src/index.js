import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Usestate from './Usestate';
import CondRendring from './CondRendring';
import ListRender from './ListRender';
import ObjecrRendring from './ObjecrRendring';
import DynamicList from './DynamicList';
import Quizapp from './Quizapp';
import UseEffects from './UseEffects';
import UseContext1 from './UseContext1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <UseContext1/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
