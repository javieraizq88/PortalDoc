import React from 'react';
import './App.css';
import {  Route, BrowserRouter, Switch } from 'react-router-dom';
import injectContext from './store/appContext';
import Home from './views/home';
import Navbar from './components/navbar';
import Registrar from './views/registrar';
import Login from './views/login';
import Perfil from './views/perfil';
import Especialidad from './views/medicos';
import ResetPassw from './views/resetPassw';

const App = props => {
   
  return (
    <>
      <BrowserRouter >
      <Navbar />
        <Switch>
          <Route exact path='/' component={Home}  /> 
          <Route exact path='/registrar' component={Registrar}  /> 
          <Route exact path='/login' component={Login}  /> 
          <Route exact path='/perfil' component={Perfil}  /> 
          <Route exact path='/medicos' component={Especialidad}  /> 
          <Route exact path='/reset_password' component={ResetPassw}  /> 
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default injectContext(App);
