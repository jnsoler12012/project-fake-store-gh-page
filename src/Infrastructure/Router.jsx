import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { TestComponent } from '../Presentation/Components/'

export default function Router() {
  return (
    <div id="background">
      <div id="main-div">
        <h1 className='titles'>Simple store fake</h1>
        <Switch>
          <Route exact path="/" component={TestComponent} />
        </Switch>
      </div>
    </div>
  )
}