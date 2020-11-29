import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Jacket from './components/Jacket'
import Shirt from './components/Shirt'
import Accessory from './components/Accessory'
import NavBar from './components/NavBar'

const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Jacket} />
        <Route exact path='/shirts' component={Shirt} />
        <Route exact path='/accessories' component={Accessory} />
      </Switch>
    </div>
  )
}

export default Routes
