<<<<<<< Updated upstream
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import UserList from './components/Users/UserList';
import SingleUser from './components/Users/SingleUser';
=======
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

>>>>>>> Stashed changes

class App extends Component {
  render() {
    return (
<<<<<<< Updated upstream
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/users" component={UserList}/>
            <Route exact path="/users/:userId" component={SingleUser}/>
=======
      <div >
        <Router>
          <Switch>
            <Route exact path="/" Component={LandingPage} />
>>>>>>> Stashed changes
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
