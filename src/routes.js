import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Repositories from './Pages/Repositories';
import Home from './Pages/Home'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/repositories' component={Repositories}></Route>
        <Route path='/' exact component={Home}></Route>
      </Switch>
    </BrowserRouter>
  )
}