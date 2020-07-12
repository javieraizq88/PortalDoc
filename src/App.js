import React from 'react';
import './App.css';
import {  Route, BrowserRouter } from 'react-router-dom';
import injectContext from './store/appContext';

const App = props => {
   
  return (
    <>
      <BrowserRouter >
        <Switch>
          <Route exact path='/' component={Home}  /> 
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default injectContext(App);
