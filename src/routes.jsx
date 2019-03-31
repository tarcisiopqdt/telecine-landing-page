import React from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/home/index'
import Cadastro from './pages/cadastro/index'
import CadastroOk from './pages/cadastroOk/index'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
           
            <Route exact path="/cadastro" component={Cadastro} />
        
            <Route path="/cadastro/ok" component={CadastroOk} />
        </Switch>
    </BrowserRouter>
)

export default Routes;