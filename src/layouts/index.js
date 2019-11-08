import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import history from '../history'

import UsersList from '../components/usersList'
import UserDetail from '../components/userDetail'

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={'/:id'} component={UserDetail} />
        <Route exact path='/' component={UsersList} />
      </Switch>
    </Router>
  )
}

export default Routes
