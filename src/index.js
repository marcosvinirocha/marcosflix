import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Categorias from './components/pages/cadastro/Categoria'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CadastroVideo from './components/pages/cadastro/Video'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={Categorias} />
      <Route component={()=> (<div>Erro 404</div>)}/>

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


