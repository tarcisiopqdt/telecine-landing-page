import React from 'react'

import {HashRouter , Switch, Route} from 'react-router-dom'

import Home from './pages/home/index'
import Cadastro from './pages/cadastro/index'
import CadastroOk from './pages/cadastroOk/index'

const Routes = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
           
            <Route exact path="/cadastro" component={Cadastro} />
        
            <Route path="/cadastro/ok" component={CadastroOk} />
        </Switch>
    </HashRouter>
)

export default Routes;