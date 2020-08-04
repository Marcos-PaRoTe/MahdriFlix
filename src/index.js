import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import {BrowserRouter, Switch, Route, } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';

const Página404 = () => (<div>Página 404, volte a origem por gentileza.</div>) 


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cadastro/video" exact component={CadastroVideo} /> 
      <Route component={Página404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
  );

  