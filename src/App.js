import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import './App.css';
// Importamos materialize
import 'materialize-css/dist/css/materialize.min.css';

import PropertyManager from './pages/PropertyManager'
import Login from './pages/Login'

class App extends React.Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <Switch>
            <Route exact path="/login" component={ Login } />
            <Route exact path="/homes" component={ PropertyManager } />
            <Route exact path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
