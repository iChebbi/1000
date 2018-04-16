import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Platform from './Platform'
import Landing from './LandingPage'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/platform" component={Platform} />{' '}
          <Route component={Landing} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
