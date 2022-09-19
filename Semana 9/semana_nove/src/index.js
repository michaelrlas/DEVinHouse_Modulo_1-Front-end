import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Cronometro from './pages/cronometro';
import StarWars from './pages/cardstar1';
import ListaLivros from './pages/ex01reacthook';
import ChangeConsole from './pages/ex02useeffect';
import ClickCounter from './pages/ex03useeffectcontar';
import ChangeTitle from './pages/ex04title';
import ClickFocus from './pages/ex05useref';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Cronometro /> */}
    {/* <StarWars /> */}
    {/* <ListaLivros /> */}
    {/* <ChangeConsole /> */}
    {/* <ClickCounter /> */}
    {/* <ChangeTitle /> */}
    <ClickFocus />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
