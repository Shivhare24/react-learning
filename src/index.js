import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  { ShareButton } from './components/ShareButton';
import { Fcomponent } from './components/FunctionalComponent';
import { Ccomponent } from './components/ClassComponent';
import { JSXComponent } from './components/JSXComponent';
import { Message } from './components/StateExample';
import { Counter } from './components/SetStateExample';
import { DestructuringInFunctionalComponent } from './components/DestructuringInFunctionalComponent';
import { DeStructuringInClassComponent } from './components/DeStructuringInClassComponent';
import { BindingEventHandler } from './components/BindingEventHandler';
import { ParentComponent } from './components/ParentComponent';
import ConditionalRendering from './components/ConditionalRendering';
import ListRendering from './components/ListRendering';

ReactDOM.render(
  <React.StrictMode>
    {/* <ListRendering /> */}
    {/* <ConditionalRendering /> */}
    {/* <ParentComponent /> */}
    {/* <BindingEventHandler />  */}
    {/* <DeStructuringInClassComponent fname='john' lname='cena' /> */}
    {/* <DestructuringInFunctionalComponent fname='john' lname='cena' /> */}
    {/* <Counter /> */}
    <App />
    {/* <ShareButton /> */}
    {/* <Fcomponent name='React'/> */}
    {/* <Ccomponent name='React' /> */}
    {/* <JSXComponent /> */}
    {/* <Message /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
