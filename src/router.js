import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Create from './components/Create'
import Edit from './components/Edit'
import Study from './components/Study'

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/create' component={Create}/>
        <Route exact path='/edit' component={Edit}/>
        <Route exact path='/study' component={Study}/>
    </Switch>
)