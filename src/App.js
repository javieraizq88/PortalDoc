import React from 'react';
import './App.css';
import {  Route, BrowserRouter, Switch } from 'react-router-dom';
import injectContext from './store/appContext';
import Home from './views/home';
import Navbar from './components/navbar';

const App = props => {
   
  return (
    <>
      <BrowserRouter >
      <Navbar />
        <Switch>
          <Route exact path='/' component={Home}  /> 
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default injectContext(App);
