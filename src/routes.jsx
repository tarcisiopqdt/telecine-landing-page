import React from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/home/index'
import Cadastro from './pages/cadastro/index'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cadastro" component={Cadastro} />
        </Switch>
    </BrowserRouter>
)

export default Routes;