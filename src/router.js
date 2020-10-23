import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Create from './components/Create'
import CreateForm from './components/CreateForm'
import Change from './components/Change'
import Edit from './components/Edit'
import Study from './components/Study'
import Review from './components/Review'

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/create' component={Create}/>
        <Route exact path='/add/:addType/:id' component={CreateForm}/>
        <Route exact path='/change' component={Change}/>
        <Route exact path='/edit/:type/:id' component={Edit}/>
        <Route exact path='/study' component={Study}/>
        <Route exact path ='/review/:type/:id' component={Review} />
    </Switch>
)