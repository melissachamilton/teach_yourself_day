import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Payment from './components/Payment';

class App extends Component {
  render() {
    return (
    <Router>
      <Switch>
        <Route exact path='/' component={Payment} />
      </Switch>
    </Router>
    )
  }
}

export default App;
